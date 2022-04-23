import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MessageService} from "../../../service/message.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    loading = false
    submitted = false;
    registerForm = this.formBuilder.group({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {

        this.submitted = true;
        if(this.registerForm.invalid) {
            return
        }


        this.loading = true;

        setTimeout(() => {
            this.messageService.showSuccessMessage("Successfully registered")
            this.loading = false;
        }, 2000)
    }

}
