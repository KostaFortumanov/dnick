import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../model/response";
import {Topic} from "../model/topic";
import {Observable} from "rxjs";
import {HomeItem} from "../model/homeItem";

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    constructor(private http: HttpClient) {
    }

    getHome(): Observable<Object> {
        return this.http.get<Object>('/api/topic')
    }

    getTopic(id: number): Observable<Response<Topic>> {
        return this.http.get<Response<Topic>>(`/api/topic/${id}`)
    }
}
