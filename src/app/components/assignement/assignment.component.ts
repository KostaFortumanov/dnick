import {Component, Input, OnInit} from '@angular/core';
import {Problem} from "../../model/problem";
import {ActivatedRoute, Router} from "@angular/router";
import {ProblemService} from "../../service/problem.service";

@Component({
    selector: 'app-assignement',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

    problem!: Problem

    codeMirrorOptions: any = {
        theme: 'darcula',
        mode: {
            name: "javascript",
            globalVars: true
        },
        indentUnit: 4,
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        extraKeys: {"Ctrl-Space": "autocomplete"},
        gutters: ["CodeMirror-linenumbers","CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        autoCloseBrackets: true,
        matchBrackets: true,
        lint: {
            esversion: 10
        },
    };

    query!: string;

    constructor(private problemService: ProblemService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.problem = this.problemService.getProblem(+this.route.snapshot.paramMap.get('id')!)
        this.query = this.problem.starterCode
    }

    setEditorContent(event: any) {
        // console.log(event, typeof event);
        console.log(this.query);
    }

    submit() {
        console.log(JSON.parse(JSON.stringify(this.query)))
    }
}
