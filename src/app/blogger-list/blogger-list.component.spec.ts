/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BloggerListComponent } from './blogger-list.component';

describe('BloggerListComponent', () => {
  let component: BloggerListComponent;
  let fixture: ComponentFixture<BloggerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloggerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
