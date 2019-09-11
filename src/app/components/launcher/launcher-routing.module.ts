import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LauncherHomeComponent } from './home/launcher-home.component';

const routes: Routes = [{
  path: 'launcher',
  component: LauncherHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LauncherRoutingModule { }
