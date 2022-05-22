import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../model/response";
import {Topic} from "../model/topic";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

const API = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    constructor(private http: HttpClient) {
    }

    getHome(): Observable<Object> {
        return this.http.get<Object>(API + '/api/topic')
    }

    getTopic(id: number): Observable<Response<Topic>> {
        return this.http.get<Response<Topic>>(API + `/api/topic/${id}`)
    }
}
