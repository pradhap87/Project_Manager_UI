import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-end-task',
  templateUrl: './end-task.component.html',
  styleUrls: ['./end-task.component.css']
})
export class EndTaskComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;
  TaskId:string;  
  constructor(private _service: SharedService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(data => this.TaskId = data['TaskId']);
    this._service.GetTask_ByID(this.TaskId).subscribe(p => this.jsonData = p); 
       
  }
  endTask(jsonData)
  {
    this._service.Update_Task(jsonData)
    .subscribe(p=>this.responseData=p); 
  }

  ngOnInit() {
  }

}
