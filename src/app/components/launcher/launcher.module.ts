import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LauncherRoutingModule } from './launcher-routing.module';
import { LauncherHomeComponent } from './home/launcher-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
  MdcTopAppBarModule,
  MdcMenuModule,
  MdcListModule,
  MdcTabBarModule,
  MdcDrawerModule
} from '@angular-mdc/web';


@NgModule({
  declarations: [LauncherHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdcTopAppBarModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcFabModule,
    MdcIconModule,
    MdcListModule,
    MdcTabBarModule,
    MdcDrawerModule,
    LauncherRoutingModule
  ]
})
export class LauncherModule { }
