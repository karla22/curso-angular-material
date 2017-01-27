import { Component, OnInit } from '@angular/core';

import { Blogger } from '../model/blogger';
import { BloggerService } from '../services/blogger.service';

@Component({
  selector: 'app-blogger-list',
  templateUrl: './blogger-list.component.html',
  styleUrls: ['./blogger-list.component.css'],
  providers: [BloggerService]
})
export class BloggerListComponent implements OnInit {
  bloggers: Blogger[];
  
  // Dependency Injection
  constructor(private bloggerService: BloggerService){}

  ngOnInit(): void {
    // this.bloggerService.getBloggers()
    //     .then(bloggers => this.bloggers = bloggers);
    this.bloggerService.getBloggers()
        .subscribe((result: Blogger[]) => {
          this.bloggers = result;
        }, (error: any) => {
          console.log('Error in getBloggers function');
        });
  }

  delete(b: Blogger): void {
    this.bloggerService.deleteBlogger(b)
        .subscribe(() => {
          this.bloggers = this.bloggers.filter(x => x.id !== b.id);
        });
  }

  getImageURL(url: string): string {
    // Returns: 'url(http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg)'
    // return 'url(' + url + ')';
    return `url(${url})`;
  }
}
