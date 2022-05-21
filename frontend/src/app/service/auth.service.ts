import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {Response} from "../model/response";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<User> {
        return this.http.post<User>('/api/auth/login', {
            username: username,
            password: password
        });
    }

    activateAccount(token: string): Observable<Response<string>> {
        return this.http.post<Response<string>>('/api/auth/activate', token);
    }

    register(username: string,
             email: string,
             firstName: string,
             lastName: string,
             password: string): Observable<Response<string>> {
        return this.http.post<Response<string>>('/api/auth/register', {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
        });
    }
}
