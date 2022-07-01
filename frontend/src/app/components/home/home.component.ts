import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {TopicService} from "../../service/topic.service";
import {Certification} from "../../model/certification";
import {CertifyService} from "../../service/certify.service";
import {MessageService} from "../../service/message.service";
import {TokenService} from "../../service/token.service";
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    homeItems = new Map()
    keys: number[] = []
    loading = false;

    destroy$ = new Subject();

    constructor(
        private router: Router,
        private topicService: TopicService,
        public tokenService: TokenService,
    ) {
    }

    ngOnInit() {
        this.loading = true;
        this.tokenService.getLogoutEvent().pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: () => {
                for (let part of this.keys) {
                    for (let item of this.homeItems.get(part)) {
                        item.finished = false;
                    }
                }
            }
        })

        this.topicService.getHome().subscribe({
            next: (data) => {
                this.homeItems = new Map(Object.entries(data))
                this.keys = Array.from(this.homeItems.keys())
                this.loading = false;
            }
        })
    }

    ngOnDestroy() {
        this.destroy$.next('')
        this.destroy$.complete()
    }
}
