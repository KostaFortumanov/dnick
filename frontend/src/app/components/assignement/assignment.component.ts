import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Problem} from "../../model/problem";
import {ActivatedRoute} from "@angular/router";
import {ProblemService} from "../../service/problem.service";
import {map, mergeMap} from "rxjs";
import {MessageService} from "../../service/message.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TestCase} from "../../model/testCase";
import {TokenService} from "../../service/token.service";

@Component({
    selector: 'app-assignement',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit, OnChanges {

    @Input() problem: Problem | undefined
    @Input() num!: number
    testCases: TestCase[] = []
    passed = 0;
    loadingPage = false;
    loading = false;

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
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        autoCloseBrackets: true,
        matchBrackets: true,
        lint: {
            esversion: 10
        },
    };

    id!: number;
    query!: string;

    certification = false;

    constructor(
        private modalService: NgbModal,
        private problemService: ProblemService,
        private route: ActivatedRoute,
        private messageService: MessageService,
        public tokenService: TokenService,
    ) {
    }

    ngOnInit(): void {
        this.loadingPage = true;
        if (this.route.snapshot.url[0]?.path == 'certify') {
            this.certification = true;
            this.setQuery()
        } else {
            this.route.paramMap.pipe(
                map(params => {
                    this.id = +params.get("id")!
                    return this.id;
                }),
                mergeMap(id => this.problemService.getProblem(id)),
            ).subscribe({
                next: (data) => {
                    this.problem = data.response
                    this.setQuery()
                    this.loadingPage = false;
                },
                error: err => {
                    this.messageService.showErrorMessage(err.error.message)
                    this.loadingPage = false;
                }
            })
        }
    }

    ngOnChanges(changes: any) {
        this.setQuery()
    }

    setEditorContent(event: any) {
        if (this.tokenService.isLoggedIn() && !this.certification) {
            window.localStorage.setItem(`problem-${this.id}`, this.query)
        }
        if (this.certification) {
            window.localStorage.setItem(`certify-${this.num}`, this.query)
        }
    }

    submit(content: any) {
        this.loading = true;
        this.route.paramMap.pipe(
            map(params => {
                this.id = +params.get("id")!
                return this.id;
            }),
            mergeMap(id => this.problemService.submitProblem(this.problem?.id!!, this.query)),
        ).subscribe({
            next: (data) => {
                this.loading = false;
                this.testCases = data.map(el => {
                    return {
                        ...el,
                        expected: el.expected.replace(/\n/g, '<br/>'),
                        got: el.got.replace(/\n/g, '<br/>'),
                        input: el.input.replace(/\n/g, '<br/>'),
                    }
                })

                this.passed = this.testCases.filter(tc => tc.passed).length

                this.modalService.open(content, {centered: true}).result
                    .then((result) => {

                    })
            }
        })
    }

    reset() {
        this.query = this.problem?.starterCode!!
    }

    setQuery() {
        let code = this.certification ? window.localStorage.getItem(`certify-${this.num}`) : window.localStorage.getItem(`problem-${this.id}`)
        if (code && this.tokenService.isLoggedIn()) {
            this.query = code;
        } else {
            this.query = this.problem?.starterCode!
        }
    }
}
