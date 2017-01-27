import { Component, OnInit } from '@angular/core';
import { Blogger } from './model/blogger';
import { BloggerService } from './services/blogger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BloggerService]
})
export class AppComponent implements OnInit {
  showForm: boolean = false;
  // Array Model
  bloggers: Blogger[];
  // Object Model -> Used in "Register Form"
  blogger: Blogger;
  
  // Dependency Injection
  constructor(private bloggerService: BloggerService){}

  ngOnInit(): void {
    // this.bloggerService.getBloggers()
    //     .then(bloggers => this.bloggers = bloggers);
    this.bloggerService.getBloggers()
        .subscribe((result: Blogger[]) => {
          this.bloggers = result;
        });

    this.initBlogger();
  }

  addBlogger(b: Blogger): void {
    this.bloggers.push(b);
    this.initBlogger();
  }

  delete(b: Blogger): void {
    this.bloggerService.deleteBlogger(b)
        .subscribe(() => {
          this.bloggers = this.bloggers.filter(x => x.id !== b.id);
        });

    //Alternativas Array.filter:
      // Underscore
      // Lodash

    // ES5 style
    // this.bloggers = this.bloggers.filter(function(x: Blogger){
    //     return x.id !== b.id;
    // });
  }

  private initBlogger(): void {
    this.blogger = new Blogger();
    this.blogger.posts = [];
  }

  getImageURL(url: string): string {
    // Returns: 'url(http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg)'
    // return 'url(' + url + ')';
    return `url(${url})`;
  }
}
