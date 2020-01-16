import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LauncherRoutingModule } from './launcher-routing.module';
import { LauncherHomeComponent } from './home/launcher-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [LauncherHomeComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LauncherRoutingModule,
  ]
})
export class LauncherModule { }
