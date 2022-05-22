import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certification} from "../model/certification";
import {Response} from "../model/response";
import {CertifyResult} from "../model/certifyResult";
import {MyProfile} from "../model/myProfile";
import {environment} from "../../environments/environment.prod";

const API = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class CertifyService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Certification[]> {
        return this.http.get<Certification[]>(API + '/api/certify')
    }

    getActiveCertification(): Observable<Response<Certification>> {
        return this.http.get<Response<Certification>>(API + '/api/certify/active')
    }

    start(certificationId: number): Observable<Response<number>> {
        return this.http.put<Response<any>>(API + `/api/certify/${certificationId}`, '')
    }

    submit(sourceCodes: string[]): Observable<Response<CertifyResult>> {
        return this.http.post<Response<any>>(API + '/api/certify/submit', sourceCodes)
    }

    getCompleted(): Observable<MyProfile[]> {
        return this.http.get<MyProfile[]>(API + '/api/certify/completed')
    }
}
