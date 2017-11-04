import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleComponent } from './console/console.component';

const routes: Routes = [

  {path: '', redirectTo:'/projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectComponent},
  {path: 'projects/:id', component: ConsoleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
