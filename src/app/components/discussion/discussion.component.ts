import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CommentService} from 'src/app/service/comment.service';
import {Comment} from "../../model/comment";

@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

    previewBtn = false;
    showReply: boolean[] = [];
    commentInput = new FormControl('')
    @ViewChild('modal') modal!: any;
    preview: string = ''
    comments: Comment[] = []

    constructor(private modalService: NgbModal, private commentService: CommentService) {
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

        this.comments = this.commentService.getComments(0)
        this.showReply.fill(false, 0, this.comments.length)
    }

    share() {
        this.commentService.comments.unshift({
            id: 0,
            from: 'Kosta Fortumanov',
            date: Date.now().toString(),
            content: this.preview,
            replies: [],
            likes: 0,
            isLiked: false,
            isDisliked: false
        })

        this.commentInput.setValue('')
    }

    toggleReply(index: number) {
        this.commentInput.setValue('')
        this.showReply[index] = !this.showReply[index]
    }

    replyToComments(commentId: number, index: number) {
        this.commentService.comments.filter(comment => comment.id == commentId)[0].replies.unshift({
            id: 0,
            from: 'Kosta Fortumanov',
            date: Date.now().toString(),
            content: this.preview,
            replies: [],
            likes: 0,
            isLiked: false,
            isDisliked: false
        })
        this.toggleReply(index)
    }

    open(content: any) {
        this.modalService.open(content, {centered: true, size: 'xl'}).result
            .then((result) => {

            })
    }
}
