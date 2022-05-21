import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-non-editable',
    templateUrl: './non-editable.component.html',
    styleUrls: ['./non-editable.component.css']
})
export class NonEditableComponent implements OnInit, AfterViewInit {

    @ViewChild('content') content!: ElementRef

    codeMirrorOptions: any = {
        theme: 'darcula',
        mode: {
            name: "javascript",
            globalVars: true
        },
        readOnly: 'true',
        cursorBlinkRate: -1
    };

    @Input() query!: string

    constructor() {
    }



    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let text = this.content.nativeElement.innerHTML;
        if(text) {
            this.query = text
                .replace(/<br>/g, '\n')
                .replace(/&lt; /g, '<')
                .replace(/ &gt;/g, '>');
        }
    }

}
