import {Injectable} from '@angular/core';
import {Problem} from "../model/problem";
import {Response} from "../model/response";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TestCase} from "../model/testCase";
import {environment} from "../../environments/environment.prod";

const API = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class ProblemService {

    constructor(private http: HttpClient) {
    }

    getProblem(id: number): Observable<Response<Problem>> {
        return this.http.get<Response<Problem>>(API + `/api/problem/${id}`)
    }

    submitProblem(id: number, query: string): Observable<TestCase[]> {
        return this.http.post<TestCase[]>(API + `/api/problem/submit/${id}`, query);
    }
}
