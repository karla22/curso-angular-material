import { Injectable } from '@angular/core';
import { Blogger } from '../model/blogger';
import { BLOGGERS } from '../model/mock-bloggers';

@Injectable()
export class BloggerService {
    getBloggers(): Blogger[] {
        return BLOGGERS;
    }

    constructor() { }
}