import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {Response} from "../model/response";
import {environment} from "../../environments/environment.prod";

const API = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<User> {
        return this.http.post<User>(API + '/api/auth/login', {
            username: username,
            password: password
        });
    }

    activateAccount(token: string): Observable<Response<string>> {
        return this.http.post<Response<string>>(API + '/api/auth/activate', token);
    }

    register(username: string,
             email: string,
             firstName: string,
             lastName: string,
             password: string,
             confirmPassword: string): Observable<Response<string>> {
        return this.http.post<Response<string>>(API + '/api/auth/register', {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            confirmPassword: confirmPassword
        });
    }
}
