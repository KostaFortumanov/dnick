import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from '../../../service/message.service';
import { AuthService } from '../../../service/auth.service';
import { finalize } from 'rxjs';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

    loading = false;
    submitted = false;
    registerForm = this.formBuilder.group({
        username: '',
        email: new FormControl('', Validators.email),
        firstName: '',
        lastName: '',
        password: new FormControl('', Validators.minLength(8)),
        confirmPassword: new FormControl('', Validators.minLength(8)),
    });

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private messageService: MessageService,
        private location: Location,
    ) {
    }

    onSubmit() {

        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        let {username, email, firstName, lastName, password, confirmPassword} = this.registerForm.value;
        this.authService.register(username, email, firstName, lastName, password, confirmPassword).pipe(
            finalize(() => {
                this.loading = false;
                this.submitted = false;
            }),
        ).subscribe({
            next: (data) => {
                this.messageService.showSuccessMessage(data.response);
            },
            error: err => {
                this.messageService.showErrorMessage(err.error.message);
            },
        });
    }

    back() {
        this.location.back();
    }
}
