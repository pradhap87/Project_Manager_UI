import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EndTaskComponent } from './end-task.component';

import { NavigationComponent } from '../navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EndTaskComponent', () => {
  let component: EndTaskComponent;
  let fixture: ComponentFixture<EndTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EndTaskComponent, NavigationComponent],
      imports: [FormsModule, RouterModule, HttpModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
