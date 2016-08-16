import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Basic ABasicAuthTokenHere'
    });
    api_url: string = 'http://example.com/search';

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

    // post() - Not implemented
    // delete() - Not implemented
}
