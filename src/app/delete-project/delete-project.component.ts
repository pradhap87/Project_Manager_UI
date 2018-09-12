import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;
  ProjectId:string;  

  constructor(private _service: SharedService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(data => this.ProjectId = data['ProjectId']);
    this._service.GetProject_ByID(this.ProjectId).subscribe(p => this.jsonData = p); 
  }
  DeleteProject(jsonData)
  {   
    this._service.Delete_Project(jsonData)
       .subscribe(p=>this.responseData=p);       
  }
  ngOnInit() {
  }

}
