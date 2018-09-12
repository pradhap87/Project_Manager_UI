import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../app/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { EndTaskComponent } from './end-task/end-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddProjectComponent,
    ViewProjectsComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    DeleteUserComponent,
    DeleteTaskComponent,
    AddUserComponent,
    AddTaskComponent,    
    EditUserComponent,
    EditTaskComponent,
    ViewTaskComponent,
    ViewUserComponent,
    DashboardComponent,
    EndTaskComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes), HttpModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
