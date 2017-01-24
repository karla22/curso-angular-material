import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { TestControlsComponent } from './test-controls/test-controls.component';
import { TestRadioComponent } from './test-radio/test-radio.component';
import { TestSelectComponent } from './test-select/test-select.component';
import { ClickComponentComponent } from './click-component/click-component.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    TestControlsComponent,
    TestRadioComponent,
    TestSelectComponent,
    ClickComponentComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
