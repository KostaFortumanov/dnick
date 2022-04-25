import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { CommentService } from 'src/app/service/comment.service';
import {Comment} from "../../model/comment";

@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
    previewBtn = false;
    reply = false;
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
    }

    toggleReply() {
        this.commentInput.setValue('')
        this.reply = !this.reply
    }

    open(content: any) {
        this.modalService.open(content, {centered: true, size: 'xl'}).result
            .then((result) => {

            })
    }
}
