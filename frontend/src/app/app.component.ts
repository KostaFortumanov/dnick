import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Toast} from "bootstrap";
import {MessageService} from "./service/message.service";
import {Message} from "./model/message";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChildren('myToast') toastEl!: QueryList<ElementRef<HTMLDivElement>>;
    messages: Message[] = [];
    size = 0;

    constructor(public messageService: MessageService) {
    }

    ngOnInit() {
        this.messageService.$successMessages.subscribe({
            next: (data) => {
                this.showMessage(data)
            }
        })

        this.messageService.$errorMessages.subscribe({
            next: (data) => {
                this.showMessage(data)
            }
        })

        // this.messageService.showErrorMessage("error")
        // this.messageService.showSuccessMessage("success")
        // this.messageService.showErrorMessage("error")
    }

    showMessage(message: Message) {
        this.messages.push(message);
        this.size++;
        setTimeout(() => {
            new Toast(this.toastEl.toArray()[this.toastEl.length - 1 - --this.size].nativeElement).hide()
            setTimeout(() => {
                this.messages.shift();
            }, 1000)
        }, 3000)
    }
}
