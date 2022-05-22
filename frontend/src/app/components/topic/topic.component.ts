import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../../service/message.service";
import {TopicService} from "../../service/topic.service";
import {map, mergeMap} from "rxjs";
import {Topic} from "../../model/topic";

@Component({
    selector: 'app-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

    topic!: Topic

    constructor(
        private sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private topicService: TopicService,
        private messageService: MessageService,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            map((params) => +params.get("id")!),
            mergeMap((id) => this.topicService.getTopic(id))
        ).subscribe({
            next: (data) => {
                this.topic = data.response
                console.log(this.topic.content)
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message)
            }
        })
    }
}
