import {Component, OnInit} from '@angular/core';
import {CertifyResult} from "../../model/certifyResult";
import {Router} from "@angular/router";

@Component({
    selector: 'app-certify-result',
    templateUrl: './certify-result.component.html',
    styleUrls: ['./certify-result.component.css']
})
export class CertifyResultComponent implements OnInit {

    result!: CertifyResult;

    constructor(private router: Router) {
        let navigation = this.router.getCurrentNavigation()
        if (navigation) {
            if (navigation?.extras.state?.hasOwnProperty('result')) {
                this.result = navigation.extras.state['result']
            }
        }
    }

    ngOnInit(): void {

    }

}
