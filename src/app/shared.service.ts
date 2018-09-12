import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //Angular UI is accessing Web API deployed in IIS
  ProjectManagerBaseUrl: string = 'http://localhost/ProjectManager.WebAPI/api/';
  jsonData: JSON;
  First_Name: String;
  last_Name: String;
  emp_Id: String;
  UserId: number;
  projectName:string;
  startDate:string;
  endDate:string;
  taskPriority:number;
  managerId:number;
  Parent__ID :number;
  Project_ID:number; Task1:String; Priority:number;
  Status:String;
  taskId:number;

  constructor(private _http: Http) { }

  //Get Users
  Get_Users(): Observable<JSON> {
    return this._http.get(this.ProjectManagerBaseUrl + "users/GetUsers")
      .pipe(map((data: Response) => <JSON>data.json()));
  }
  //Add User
  Add_User(First_Name, last_Name, emp_Id): Observable<boolean> {
    return this._http.get(this.ProjectManagerBaseUrl + "users/AddUser?firstName=" + First_Name + "&lastName=" + last_Name + "&employeeId=" + emp_Id)
      .pipe(map((data: Response) => <boolean>data.ok));
  }

  GetUser_ByID(UserId): Observable<JSON> {
    return this._http.get(this.ProjectManagerBaseUrl + "users/GetUser/" + UserId)
      .pipe(map((data: Response) => <JSON>data.json()));
  }

  Update_User(jsonData): Observable<boolean> {
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.ProjectManagerBaseUrl + "users/UpdatUser/", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));
  }

  Delete_User(jsonData): Observable<boolean> {
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.ProjectManagerBaseUrl + "users/DeleteUser/", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));
  }


  Get_Projects(): Observable<JSON> {
    return this._http.get(this.ProjectManagerBaseUrl + "project/GetProjects")
      .pipe(map((data: Response) => <JSON>data.json()));
  }

  Add_Project(projectName, startDate, endDate, taskPriority, managerId): Observable<boolean> {
    return this._http.get(this.ProjectManagerBaseUrl + "project/AddProject?project=" + projectName + "&managerId=" + managerId + "&priority=" + taskPriority+ "&startDate=" + startDate+ "&endDate=" + endDate)
      .pipe(map((data: Response) => <boolean>data.ok));
  }

  GetProject_ByID(ProjectId): Observable<JSON> {
    return this._http.get(this.ProjectManagerBaseUrl + "project/GetProject/" + ProjectId)
      .pipe(map((data: Response) => <JSON>data.json()));
  }
  
  Delete_Project(jsonData): Observable<boolean> {
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.ProjectManagerBaseUrl + "project/DeleteProject/", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));
  }
  Update_Project(jsonData): Observable<boolean> {
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.ProjectManagerBaseUrl + "project/UpdatProject/", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));
  }

  Get_ParentTask(): Observable<JSON> {
    return this._http.get(this.ProjectManagerBaseUrl + "task/GetParentTask")
      .pipe(map((data: Response) => <JSON>data.json()));
  }

  Add_Task(Parent__ID, Project_ID, Task1, Start_Date, End_Date, Priority, Status): Observable<boolean> {
    return this._http.get(this.ProjectManagerBaseUrl + "task/AddTask?Parent__ID=" + Parent__ID + "&Project_ID=" + Project_ID + "&Task1=" + Task1+ "&Start_Date=" + Start_Date+ "&End_Date=" + End_Date+ "&Priority=" + Priority+"&Status="+Status)
      .pipe(map((data: Response) => <boolean>data.ok));
  }

  Get_Task(): Observable<JSON> {
    return this._http.get(this.ProjectManagerBaseUrl + "task/GetTasks")
      .pipe(map((data: Response) => <JSON>data.json()));
  }

  GetTask_ByID(taskId): Observable<JSON> {
    return this._http.get(this.ProjectManagerBaseUrl + "task/GetTask/" + taskId)
      .pipe(map((data: Response) => <JSON>data.json()));
  }

  Update_Task(jsonData): Observable<boolean> {
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.ProjectManagerBaseUrl + "task/UpdatTask/", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));
  }
  Delete_Task(jsonData): Observable<boolean> {
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.ProjectManagerBaseUrl + "task/DeleteTask/", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));  
}
Get_TaskByProjectId(Project_ID): Observable<JSON> {
  return this._http.get(this.ProjectManagerBaseUrl + "task/GetTasks_ByProjId/"+Project_ID)
    .pipe(map((data: Response) => <JSON>data.json()));
}

Get_CompletedTask(): Observable<JSON> {
  return this._http.get(this.ProjectManagerBaseUrl + "task/GetCompletedTask")
    .pipe(map((data: Response) => <JSON>data.json()));
}

}