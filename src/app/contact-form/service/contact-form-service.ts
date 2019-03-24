import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactFormService {

    constructor(private http: HttpClient) { }

    sendRequest(payload) {
        const url = 'https://pbz25sgwgi.execute-api.eu-west-1.amazonaws.com/production/contact';
        return this.http.post(url, payload);
    }

}
