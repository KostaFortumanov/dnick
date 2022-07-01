import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MessageService} from "../../../service/message.service";
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    submitted = false;
    loading = false;
    loginForm = this.formBuilder.group({
        username: '',
        password: '',
    })

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private tokenService: TokenService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private location: Location
    ) {
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        let {username, password} = this.loginForm.value
        this.authService.login(username, password).subscribe({
            next: (user) => {
                this.tokenService.saveUser(user)
                this.tokenService.saveToken(user.token)
                let redirectTo = this.route.snapshot.queryParamMap.get('redirectTo')
                redirectTo = redirectTo ? redirectTo : '/'
                this.router.navigateByUrl(redirectTo)
            },
            error: () => {
                this.loading = false;
                this.submitted = false;
                this.messageService.showErrorMessage("Invalid username or password")
            }
        })
    }

    back() {
        this.location.back();
    }
}
