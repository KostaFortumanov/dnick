import { Component, OnInit } from '@angular/core';
import {Problem} from "../../model/problem";
import {ProblemService} from "../../service/problem.service";
import {query} from "@angular/animations";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

    id!: number

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id')!
    }


}
