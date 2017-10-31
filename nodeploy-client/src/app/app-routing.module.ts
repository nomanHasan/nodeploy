import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleComponent } from './console/console.component';

const routes: Routes = [

  {path: '', redirectTo:'/console', pathMatch: 'full'},
  {path: 'console', component: ConsoleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
