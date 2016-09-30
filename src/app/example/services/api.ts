import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Basic MmEyODE2NTQxYmMyOWIxYjU2ODI3OTEwYmJiMzVlMWU6NDZmYjFhN2VlNjAxYzliOTU5YmY4Y2JkYTllMjMxZDI='
    });
    api_url: string = 'http://localhost/_search';

    constructor(private http: Http) {}

    private getJson(response: Response) {
        return response.json();
    }

    private checkForError(response: Response): Response {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText)
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }

    get(path: string, params?: URLSearchParams): Observable<any> {
        let defaultParams = new URLSearchParams();
        return this.http
            .get(`${this.api_url}${path}`, { headers: this.headers, search: params || defaultParams })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }
}
