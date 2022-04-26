import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-certify',
    templateUrl: './certify.component.html',
    styleUrls: ['./certify.component.css']
})
export class CertifyComponent implements OnInit {

    num = 1

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    next() {
        this.num++;
        this.router.navigate(['certify', 'problem', this.num])
    }

    prev() {
        this.num--;
        this.router.navigate(['certify', 'problem', this.num])
    }

    submit() {
        this.router.navigate(['result'])
    }
}
