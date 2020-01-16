import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LauncherHomeComponent } from './home/launcher-home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: 'launcher',
  component: LauncherHomeComponent,
  children: [
    {
      path: 'list',
      component: ListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LauncherRoutingModule { }
