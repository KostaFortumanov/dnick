import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { Certification } from '../../model/certification';
import { CertifyService } from '../../service/certify.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../../service/message.service';
import { OnDestroy } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.css'],
})
export class CertificationsComponent implements OnInit, OnDestroy {

    certifications: Certification[] = [];
    selectedCertification: Certification | undefined;
    inProgress: Certification | undefined;
    interval: any;
    loading = false;

    constructor(
        public tokenService: TokenService,
        private certifyService: CertifyService,
        private router: Router,
        private modalService: NgbModal,
        private messageService: MessageService,
    ) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.certifyService.getAll().subscribe({
            next: (data) => {
                this.certifications = data;
            },
        });

        this.certifyService.getActiveCertification().pipe(
            finalize(() => this.loading = false)
        ).subscribe({
            next: (data) => {
                this.inProgress = data.response;
                this.interval = setInterval(() => {
                    this.inProgress!.timeLeft = this.inProgress?.timeLeft!! - 1;
                    if (this.inProgress?.timeLeft! < 0) {
                        this.inProgress = undefined;
                        clearInterval(this.interval);
                    }
                }, 1000);
            },
        });
    }

    open(content: any, certification: Certification) {
        if (certification.id == this.inProgress?.id) {
            this.router.navigate(['certify']);
        } else {
            this.selectedCertification = certification;
            let modal = this.modalService.open(content, {centered: true}).result
                .then((result) => {

                });
        }
    }

    start(certificationId: number) {
        this.certifyService.start(certificationId).subscribe({
            next: (data) => {
                this.close();
                for (let i = 0; i < data.response; i++) {
                    window.localStorage.removeItem(`certify-${i}`);
                }
                this.router.navigate(['certify']);
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message);
                this.close();
            },
        });
    }

    close() {
        this.selectedCertification = undefined;
        this.modalService.dismissAll();
    }

    ngOnDestroy() {
        clearInterval(this.interval)
    }
}
