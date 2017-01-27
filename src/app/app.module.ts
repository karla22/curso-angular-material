import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { TestControlsComponent } from './test-controls/test-controls.component';
import { TestRadioComponent } from './test-radio/test-radio.component';
import { TestSelectComponent } from './test-select/test-select.component';
import { ClickComponentComponent } from './click-component/click-component.component';
import { EventComponent } from './event/event.component';
import { BloggerListComponent } from './blogger-list/blogger-list.component';
import { BloggerAboutComponent } from './blogger-about/blogger-about.component';

// Define APP routes
const routes: Routes = [
  {
    path: '',
    component: BloggerListComponent
  },
  {
    path: 'about',
    component: BloggerAboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestControlsComponent,
    TestRadioComponent,
    TestSelectComponent,
    ClickComponentComponent,
    EventComponent,
    BloggerListComponent,
    BloggerAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
