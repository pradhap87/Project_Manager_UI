import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
  
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  jsonData: JSON;
  constructor(private _service: SharedService) {
    this._service.Get_Users().subscribe(p => this.jsonData = p);
   }

  ngOnInit() {
  }

}
