import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MessageService} from "../../../service/message.service";
import {AuthService} from "../../../service/auth.service";
import {finalize} from "rxjs";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    loading = false
    submitted = false;
    registerForm = this.formBuilder.group({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    })

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private messageService: MessageService,
    ) {
    }

    onSubmit() {

        this.submitted = true;
        if (this.registerForm.invalid) {
            return
        }

        this.loading = true;
        let {username, email, firstName, lastName, password} = this.registerForm.value
        this.authService.register(username, email, firstName, lastName, password).pipe(
            finalize(() => {
                this.loading = false
                this.submitted = false
            })
        ).subscribe({
            next: (data) => {
                this.messageService.showSuccessMessage(data.response)
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message)
            }
        })
    }

}
