import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component'
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {EndTaskComponent} from './end-task/end-task.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users', component: ViewUserComponent },
  { path: 'tasks', component: ViewTaskComponent },
  { path: 'projects', component: ViewProjectsComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'edituser', component: EditUserComponent },
  { path: 'edittask', component: EditTaskComponent },
  { path: 'editproject', component: EditProjectComponent },
  { path: 'deleteproject', component: DeleteProjectComponent },
  { path: 'deletetask', component: DeleteTaskComponent },
  { path: 'deleteuser', component: DeleteUserComponent },
  { path: 'endTask', component: EndTaskComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
