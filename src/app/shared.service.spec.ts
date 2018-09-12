import { TestBed, inject } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

let testService: SharedService;
let mockBackend: MockBackend;

describe('Project Manager - SharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService, MockBackend, BaseRequestOptions, {
        provide: Http,
        useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }],
      imports: [HttpModule]
    });
  });
  it('should be created', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));
  it('getTask_ByID should return JSON value', inject([SharedService], (taskService) => {
    taskService.GetTask_ByID(100).subscribe(result => expect(result[0].Task_ID).toEqual(100));
  }));
  it('Retrieves all the tasks', inject([SharedService], (taskService) => {
    taskService.Get_Task().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));

  it('Retrieves all the Projects', inject([SharedService], (taskService) => {
    taskService.Get_Projects().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));

  it('Retrieves all the Users', inject([SharedService], (taskService) => {
    taskService.Get_Users().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));
  it('getProject_ByID should return JSON value', inject([SharedService], (taskService) => {
    taskService.GetProject_ByID(100).subscribe(result => expect(result[0].Task_ID).toEqual(100));
  }));
  it('getUser_ByID should return JSON value', inject([SharedService], (taskService) => {
    taskService.GetUser_ByID(100).subscribe(result => expect(result[0].Task_ID).toEqual(100));
  }));
});
