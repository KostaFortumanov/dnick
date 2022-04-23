import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Message} from "../model/message";

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    $successMessages = new Subject<Message>()
    $errorMessages = new Subject<Message>()

    showSuccessMessage(message: string) {
        this.$successMessages.next({message: message, type: 'success'})
    }

    showErrorMessage(message: string) {
        this.$errorMessages.next({message: message, type: 'danger'})
    }
}
