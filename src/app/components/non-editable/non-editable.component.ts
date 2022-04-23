import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-non-editable',
    templateUrl: './non-editable.component.html',
    styleUrls: ['./non-editable.component.css']
})
export class NonEditableComponent implements OnInit {

    codeMirrorOptions: any = {
        theme: 'darcula',
        mode: {
            name: "javascript",
            globalVars: true
        },
        readOnly: 'nocursor',
    };

    @Input() query!: string

    constructor() {
    }

    ngOnInit(): void {
    }

}
