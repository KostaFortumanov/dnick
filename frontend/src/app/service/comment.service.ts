import {Injectable} from '@angular/core';
import {Comment} from "../model/comment";
import {Observable} from "rxjs";
import {Page} from "../model/page";
import {HttpClient} from "@angular/common/http";
import {Response} from "../model/response";
import {environment} from "../../environments/environment.prod";

const API = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor(private http: HttpClient) {
    }

    getComments(id: number, page: number, sort: string): Observable<Page<Comment>> {
        return this.http.get<Page<Comment>>(API + `/api/discussion/${id}?page=${page}&size=6&sort=${sort},desc`)
    }

    postComment(id: number, content: string): Observable<Response<Comment>> {
        return this.http.post<Response<Comment>>(API + `/api/discussion/post/${id}`, content)
    }

    replyToComment(id: number, content: string): Observable<Response<Comment>> {
        return this.http.post<Response<Comment>>(API + `/api/discussion/reply/${id}`, content)
    }

    likeComment(id: number): Observable<Response<number>> {
        return this.http.put<Response<number>>(API + `/api/discussion/like/${id}`, '')
    }

    dislikeComment(id: number): Observable<Response<number>> {
        return this.http.put<Response<number>>(API + `/api/discussion/dislike/${id}`, '')
    }
}
