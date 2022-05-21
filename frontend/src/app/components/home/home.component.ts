import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {TopicService} from "../../service/topic.service";
import {Certification} from "../../model/certification";
import {CertifyService} from "../../service/certify.service";
import {MessageService} from "../../service/message.service";
import {TokenService} from "../../service/token.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    homeItems = new Map()
    keys: number[] = []
    certifications: Certification[] = []
    selectedCertification: Certification | undefined
    inProgress: Certification | undefined;
    interval: any

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private topicService: TopicService,
        private certifyService: CertifyService,
        private messageService: MessageService,
        public tokenService: TokenService,
    ) {
    }

    ngOnInit() {
        this.topicService.getHome().subscribe({
            next: (data) => {
                this.homeItems = new Map(Object.entries(data))
                this.keys = Array.from(this.homeItems.keys())
            }
        })

        this.certifyService.getAll().subscribe({
            next: (data) => {
                this.certifications = data
            }
        })

        this.certifyService.getActiveCertification().subscribe({
            next: (data) => {
                this.inProgress = data.response
                this.interval = setInterval(() => {
                    this.inProgress!.timeLeft = this.inProgress?.timeLeft!! - 1;
                    if (this.inProgress?.timeLeft! < 0) {
                        this.inProgress = undefined
                        clearInterval(this.interval)
                    }
                }, 1000)
            }
        })
    }

    open(content: any, certification: Certification) {
        if (certification.id == this.inProgress?.id) {
            this.router.navigate(['certify'])
        } else {
            this.selectedCertification = certification
            let modal = this.modalService.open(content, {centered: true}).result
                .then((result) => {

                })
        }
    }

    start(certificationId: number) {
        this.certifyService.start(certificationId).subscribe({
            next: (data) => {
                this.close()
                for (let i = 0; i < data.response; i++) {
                    window.localStorage.removeItem(`certify-${i}`)
                }
                this.router.navigate(['certify'])
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message)
                this.close()
            }
        })
    }

    close() {
        this.selectedCertification = undefined
        this.modalService.dismissAll()
    }

    ngOnDestroy() {
        clearInterval(this.interval)
    }
}
