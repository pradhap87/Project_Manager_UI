import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;
  userId:string;  
  constructor(private _service: SharedService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(data => this.userId = data['UserId']);
    this._service.GetUser_ByID(this.userId).subscribe(p => this.jsonData = p); 
  }
  DeleteUser(jsonData)
  {   
    this._service.Delete_User(jsonData)
       .subscribe(p=>this.responseData=p);       
  }
  ngOnInit() {
  }

}
