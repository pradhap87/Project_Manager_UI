import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;
  TaskId:string;  
  userData: JSON;
  projectData: JSON;
  parentTaskData: JSON;

  constructor(private _service: SharedService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(data => this.TaskId = data['TaskId']);
    this._service.GetTask_ByID(this.TaskId).subscribe(p => this.jsonData = p); 
    this._service.Get_Projects().subscribe(p => this.projectData = p); 
    this._service.Get_Users().subscribe(p => this.userData = p);
    this._service.Get_ParentTask().subscribe(p => this.parentTaskData = p);  
  }
  UpdateTask(jsonData)
  {
    this._service.Update_Task(jsonData)
         .subscribe(p=>this.responseData=p); 
  }
  ngOnInit() {
  }

}
