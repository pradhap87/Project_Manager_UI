import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;
  ProjectId:string;  
  userData: JSON;

  constructor(private _service: SharedService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(data => this.ProjectId = data['ProjectId']);
    this._service.GetProject_ByID(this.ProjectId).subscribe(p => this.jsonData = p); 
    this._service.Get_Users().subscribe(p => this.userData = p);
  }
UpdateProject(jsonData)
{
  this._service.Update_Project(jsonData)
       .subscribe(p=>this.responseData=p); 
}
  ngOnInit() {
  }

}
