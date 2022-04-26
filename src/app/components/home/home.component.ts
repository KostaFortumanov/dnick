import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private modalService: NgbModal, private router: Router) {
    }

    ngOnInit() {
    }

    open(content: any) {
        let modal = this.modalService.open(content, {centered: true}).result
            .then((result) => {

            })
    }

    start(close: any) {
        this.router.navigate(['certify', 'problem', '1'])
    }
}
