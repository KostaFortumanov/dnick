import {Component} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(
        public tokenService: TokenService,
        private router: Router,
    ) {
    }

    logOut() {
        this.tokenService.logOut();
        this.router.navigate(['/home'])
    }
}
