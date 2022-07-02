import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from '../../model/comment';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Subject } from 'rxjs';
import { MessageService } from '../../service/message.service';
import { TokenService } from '../../service/token.service';


@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    styleUrls: ['./discussion.component.css'],
})
export class DiscussionComponent implements OnInit {

    $comments = new Subject<string>();

    previewBtn = false;
    showReply: boolean[] = [];
    commentInput = new FormControl('');
    editComment = new FormControl('');
    sort = new FormControl('likes');
    @ViewChild('modal') modal!: any;
    preview: string = '';
    comments: Comment[] = [];
    page = 0;
    last = true;
    strategy = 'add';
    loading = false;
    selectedComment: Comment | undefined;

    constructor(
        private modalService: NgbModal,
        private commentService: CommentService,
        private route: ActivatedRoute,
        private messageService: MessageService,
        public tokenService: TokenService,
    ) {
    }

    ngOnInit(): void {
        this.commentInput.valueChanges.subscribe({
            next: (data) => {
                this.setPreview(data);
            },
        });

        this.editComment.valueChanges.subscribe({
            next: (data) => {
                this.setPreview(data);
            },
        });

        this.sort.valueChanges.subscribe({
            next: () => {
                this.page = 0;
                this.$comments.next('reset');
            },
        });

        this.loading = true;
        this.$comments.pipe(
            mergeMap((strategy) => {
                this.strategy = strategy;
                if (this.route.parent?.paramMap) {
                    return this.route.parent.paramMap;
                }

                return this.route.paramMap;
            }),
            map((params) => +params.get('id')!),
            mergeMap(id => this.commentService.getComments(id, this.page, this.sort.value)),
        ).subscribe({
            next: (data) => {
                if (this.strategy == 'reset') {
                    this.comments = [];
                }
                this.showReply = [];
                this.comments = this.comments.concat(data.content);
                this.last = data.last;
                this.showReply.fill(false, 0, this.comments.length);
                this.loading = false;
            },
        });

        this.$comments.next('add');
    }

    setPreview(data: string) {
        this.previewBtn = !!data;
        this.preview = data.replace(/<code>\n?/g, '<app-non-editable>')
            .replace(/\n?<\/code>/g, '</app-non-editable>')
            .replace(/</g, '< ')
            .replace(/>/g, ' >')
            .replace(/\n/g, '<br>')
            .replace(/< app-non-editable >/g, '<app-non-editable>')
            .replace(/< \/app-non-editable >/g, '</app-non-editable>');
    }

    viewMore() {
        this.loading = true;
        this.page++;
        this.$comments.next('add');
    }

    share() {
        let id = +this.route.parent?.snapshot.paramMap.get('id')!;
        this.commentService.postComment(id, this.preview).subscribe({
            next: (data) => {
                this.comments.unshift(data.response);
                this.commentInput.setValue('');
                this.messageService.showSuccessMessage('Comment shared');
            },
        });
    }

    toggleReply(index: number) {
        this.commentInput.setValue('');
        this.showReply[index] = !this.showReply[index];
    }

    replyToComments(commentId: number, index: number) {
        this.commentService.replyToComment(commentId, this.preview).subscribe({
            next: (data) => {
                this.comments.filter(comment => comment.id == commentId)[0].replies.unshift(data.response);
                this.toggleReply(index);
                this.messageService.showSuccessMessage('Reply shared');
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message);
            },
        });
    }

    like(comment: Comment) {
        this.commentService.likeComment(comment.id).subscribe({
            next: (data) => {
                comment.isLiked = !comment.isLiked;
                comment.isDisliked = false;
                comment.likes = data.response;
            },
        });
    }

    dislike(comment: Comment) {
        this.commentService.dislikeComment(comment.id).subscribe({
            next: (data) => {
                comment.isLiked = false;
                comment.isDisliked = !comment.isDisliked;
                comment.likes = data.response;
            },
        });
    }

    open(content: any) {
        this.modalService.open(content, {centered: true, size: 'xl'}).result
            .then((result) => {

            });
    }

    openDeleteModal(content: any, comment: Comment) {
        this.selectedComment = comment;
        this.modalService.open(content, {centered: true}).result
            .then((result) => {
                this.close();
            });
    }

    delete() {
        this.commentService.deleteComment(this.selectedComment?.id!!).subscribe({
            next: (data) => {
                if (data.response.userId == -1) {
                    for (let i = 0; i < this.comments.length; i++) {
                        if (this.comments[i].id == data.response.id) {
                            this.comments.splice(i, 1);
                        }
                    }
                } else {
                    for (let i = 0; i < this.comments.length; i++) {
                        if (this.comments[i].id == data.response.id) {
                            this.comments[i] = data.response;
                        }
                        for (let j = 0; j < this.comments[i]?.replies.length; j++) {
                            if (this.comments[i].replies[j].id == data.response.id) {
                                this.comments[i].replies[j] = data.response;
                            }
                        }
                    }
                }
                this.close();
                this.messageService.showSuccessMessage('Comment deleted successfully');
            },
            error: (err) => {
                this.messageService.showErrorMessage(err.error.message);
            },
        });
    }

    close() {
        this.selectedComment = undefined;
        this.commentInput.setValue('');
        this.modalService.dismissAll();
    }

    openEditModal(content: any, comment: Comment) {
        this.selectedComment = comment;
        const value = comment.content.replace(/<\/app-non-editable>/g, '< /app-non-editable >')
            .replace(/<app-non-editable>/g, '< app-non-editable >')
            .replace(/<br>/g, '\n')
            .replace(/ >/g, '>')
            .replace(/< /g, '<')
            .replace(/<\/app-non-editable>/g, '\n</code>')
            .replace(/<app-non-editable>/g, '<code>\n');

        this.editComment.setValue(value);
        this.modalService.open(content, {centered: true, size: 'xl'}).result
            .then((result) => {
                this.close();
            });
    }

    edit() {
        this.commentService.editComment(this.selectedComment?.id!!, this.preview).subscribe({
            next: (data) => {
                this.messageService.showSuccessMessage(data.response);
                for (let i = 0; i < this.comments.length; i++) {
                    if (this.comments[i].id == this.selectedComment?.id) {
                        this.comments[i].content = this.preview;
                    }
                    for (let j = 0; j < this.comments[i].replies.length; j++) {
                        if (this.comments[i].replies[j].id == this.selectedComment?.id) {
                            this.comments[i].replies[j].content = this.preview;
                        }
                    }
                }
                this.close();
            },
        });
    }
}
