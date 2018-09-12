import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  jsonData: JSON;
  projectData: JSON;
  Project_ID: number;


  constructor(private _service: SharedService) {
    this._service.Get_Projects().subscribe(p => this.projectData = p);
  }
  ViewTask() {
    this._service.Get_Task().subscribe(p => this.jsonData = p);
  }
  GetTasks() {
    if(this.Project_ID != undefined)
    {
    this._service.Get_TaskByProjectId(this.Project_ID).subscribe(p => this.jsonData = p);
  }
  }
  ViewCompletedTask() {
    this._service.Get_CompletedTask().subscribe(p => this.jsonData = p);
  }
  ngOnInit() {
  }

}
