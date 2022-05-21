import {Component, OnInit} from '@angular/core';
import {Certification} from "../../model/certification";
import {CertifyService} from "../../service/certify.service";
import {MyProfile} from "../../model/myProfile";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    myProfiles: MyProfile[] = []

    constructor(private certifyService: CertifyService) {
    }

    ngOnInit(): void {
        this.certifyService.getCompleted().subscribe({
            next: (data) => {
                this.myProfiles = data
            }
        })
    }

    download(id: number) {

    }
}
