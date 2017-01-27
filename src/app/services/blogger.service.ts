import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Blogger } from '../model/blogger';
// import { BLOGGERS } from '../model/mock-bloggers';

const BLOGGER_API: string = 'http://localhost:3000/bloggers';

@Injectable()
export class BloggerService {
    constructor(private http: Http) {};

    // getBloggers(): Promise<Blogger[]> {
    //     return Promise.resolve(BLOGGERS);
    // }
    
    getBloggers(): Observable<Blogger[]> {
        return this.http.get(BLOGGER_API)
                        .map((response: Response) => response.json());
    }
}