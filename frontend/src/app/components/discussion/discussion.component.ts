import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CommentService} from 'src/app/service/comment.service';
import {Comment} from "../../model/comment";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap, Subject} from "rxjs";
import {JSHINT} from "jshint";
import {MessageService} from "../../service/message.service";
import data = JSHINT.data;


@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

    $comments = new Subject<string>()

    previewBtn = false;
    showReply: boolean[] = [];
    commentInput = new FormControl('')
    sort = new FormControl('likes')
    @ViewChild('modal') modal!: any;
    preview: string = ''
    comments: Comment[] = []
    page = 0;
    last = true;
    strategy = 'add'

    constructor(
        private modalService: NgbModal,
        private commentService: CommentService,
        private route: ActivatedRoute,
        private messageService: MessageService,
    ) {
    }

    ngOnInit(): void {
        this.commentInput.valueChanges.subscribe({
            next: (data) => {
                this.previewBtn = !!data;
                console.log(data)
                this.preview = data.replace(/<code>\n?/g, "<app-non-editable>")
                    .replace(/\n?<\/code>/g, "</app-non-editable>")
                    .replace(/</g, '< ')
                    .replace(/>/g, ' >')
                    .replace(/\n/g, '<br>')
                    .replace(/< app-non-editable >/g, "<app-non-editable>")
                    .replace(/< \/app-non-editable >/g, "</app-non-editable>")

                console.log(this.preview)
            }
        })

        this.sort.valueChanges.subscribe({
            next: () => {
                this.page = 0
                this.$comments.next('reset');
            }
        })

        this.$comments.pipe(
            mergeMap((strategy) => {
                this.strategy = strategy
                if (this.route.parent?.paramMap) {
                    return this.route.parent.paramMap
                }

                return this.route.paramMap
            }),
            map((params) => +params.get("id")!),
            mergeMap(id => this.commentService.getComments(id, this.page, this.sort.value))
        ).subscribe({
            next: (data) => {
                if (this.strategy == 'reset') {
                    console.log('resseting')
                    this.comments = []
                }
                this.showReply = []
                console.log(data)
                this.comments = this.comments.concat(data.content)
                this.last = data.last
                this.showReply.fill(false, 0, this.comments.length)
            }
        })

        this.$comments.next('add')
    }

    viewMore() {
        this.page++
        this.$comments.next('add')
    }

    share() {
        let id = +this.route.parent?.snapshot.paramMap.get("id")!
        console.log(this.preview)
        this.commentService.postComment(id, this.preview).subscribe({
            next: (data) => {
                this.comments.unshift(data.response)
                this.commentInput.setValue('')
                this.messageService.showSuccessMessage("Comment shared")
            }
        })
    }

    toggleReply(index: number) {
        this.commentInput.setValue('')
        this.showReply[index] = !this.showReply[index]
    }

    replyToComments(commentId: number, index: number) {
        this.commentService.replyToComment(commentId, this.preview).subscribe({
            next: (data) => {
                this.comments.filter(comment => comment.id == commentId)[0].replies.unshift(data.response)
                this.toggleReply(index)
                this.messageService.showSuccessMessage("Reply shared")
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message)
            }
        })
    }

    like(comment: Comment) {
        this.commentService.likeComment(comment.id).subscribe({
            next: (data) => {
                comment.isLiked = !comment.isLiked;
                comment.isDisliked = false;
                comment.likes = data.response
            }
        })
    }

    dislike(comment: Comment) {
        this.commentService.dislikeComment(comment.id).subscribe({
            next: (data) => {
                comment.isLiked = false;
                comment.isDisliked = !comment.isDisliked;
                comment.likes = data.response
            }
        })
    }

    open(content: any) {
        this.modalService.open(content, {centered: true, size: 'xl'}).result
            .then((result) => {

            })
    }
}
