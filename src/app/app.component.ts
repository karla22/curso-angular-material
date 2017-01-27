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
  // Object Model -> Used in "Register Form"
  blogger: Blogger;
  
  // Dependency Injection
  constructor(private bloggerService: BloggerService){}

  ngOnInit(): void {
    this.initBlogger();
  }

  addBlogger(b: Blogger): void {
    // this.bloggers.push(b);
    this.initBlogger();
  }

  private initBlogger(): void {
    this.blogger = new Blogger();
    this.blogger.posts = [];
  }
}
