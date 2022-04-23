import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MessageService} from "../../../service/message.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    submitted = false;
    loading = false;
    loginForm = this.formBuilder.group({
        username: '',
        password: '',
    })

    constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {

        this.submitted = true;
        if(this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        setTimeout(() => {
            this.messageService.showErrorMessage("Invalid username or password")
            this.loading = false;
        }, 2000)
    }
}
