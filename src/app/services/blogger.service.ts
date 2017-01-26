import { Injectable } from '@angular/core';
import { Blogger } from '../model/blogger';
import { BLOGGERS } from '../model/mock-bloggers';

@Injectable()
export class BloggerService {
    getBloggers(): Promise<Blogger[]> {
        return Promise.resolve(BLOGGERS);
    }

    constructor() { }
}