import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Blogger } from '../model/blogger';
// import { BLOGGERS } from '../model/mock-bloggers';

const BLOGGER_API: string = 'http://localhost:3000/bloggerss';

@Injectable()
export class BloggerService {
    constructor(private http: Http) {};

    // getBloggers(): Promise<Blogger[]> {
    //     return Promise.resolve(BLOGGERS);
    // }
    
    getBloggers(): Observable<Blogger[]> {
        return this.http.get(BLOGGER_API)
                        .map(this.processResult)
                        .catch(this.handleError);
    }

    //(response: Response) => response.json()
    private processResult(response: Response) {
        // Process the result here!
        let body = response.json();
        return body || {};
    }

    private handleError(error: Response) {
        // Process the Error here!
        // console.log('Error found', error.toString());
        // More processing....
        if(error) {
            const httpCode = error.status;
            const httpBody = error.json();
            const httpStatusText = error.statusText;
            console.log('Http error code', httpCode);
            console.log('Http error status text', httpStatusText);
            console.log('Http error body', httpBody);
        }

        return Observable.throw(error);
    }

    deleteBlogger(blogger: Blogger): Observable<Blogger> {
        // Call to: http://localhost:3000/bloggers/1
        return this.http.delete(`${BLOGGER_API}/${blogger.id}`)
                        .map((response: Response) => response.json());
    }
}