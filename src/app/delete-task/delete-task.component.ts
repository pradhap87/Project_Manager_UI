import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;
  TaskId:string;  
  constructor(private _service: SharedService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(data => this.TaskId = data['TaskId']);
    this._service.GetTask_ByID(this.TaskId).subscribe(p => this.jsonData = p); 
       
  }
  DeleteTask(jsonData)
  {
    this._service.Delete_Task(jsonData)
         .subscribe(p=>this.responseData=p); 
  }
  ngOnInit() {
  }

}
