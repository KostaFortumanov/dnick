import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { CertifyService } from '../../service/certify.service';
import { Certification } from '../../model/certification';
import { Problem } from '../../model/problem';
import { MessageService } from '../../service/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-certify',
    templateUrl: './certify.component.html',
    styleUrls: ['./certify.component.css'],
})
export class CertifyComponent implements OnInit, OnDestroy {

    num = 0;
    certification!: Certification;
    currentProblem: Problem | undefined;
    interval: any;
    loading = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private certifyService: CertifyService,
        private messageService: MessageService,
        private modalService: NgbModal,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            map(params => +params.get('id')!),
            mergeMap(id => this.certifyService.getActiveCertification()),
        ).subscribe({
            next: (data) => {
                this.loading = false;
                this.certification = data.response;
                this.currentProblem = this.certification.problems[this.num];
                this.interval = setInterval(() => {
                    this.certification.timeLeft--;
                    if (this.certification.timeLeft == 0) {
                        clearInterval(this.interval);
                        this.submit();
                    }
                }, 1000);
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message);
                this.router.navigate(['/']);
            },
        });
    }

    next() {
        this.currentProblem = this.certification.problems[++this.num];
    }

    prev() {
        this.currentProblem = this.certification.problems[--this.num];
    }

    submitModal(content: any) {
        let modal = this.modalService.open(content, {centered: true}).result
            .then((result) => {

            });
    }


    close() {
        this.modalService.dismissAll();
    }

    submit() {
        this.close();
        this.loading = true;
        let sourceCodes: string[] = [];
        for (let i = 0; i < this.certification.problems.length; i++) {
            let code = window.localStorage.getItem(`certify-${i}`);
            if (code) {
                sourceCodes.push(code);
            } else {
                sourceCodes.push('');
            }
        }

        this.certifyService.submit(sourceCodes).subscribe({
            next: (data) => {
                this.router.navigate(['result'], {state: {result: data.response}});
            },
        });
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
