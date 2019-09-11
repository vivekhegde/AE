import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LinkListComponent } from './link-list/link-list.component';
import { TemplateDrivenComponent } from './form-validations/template-driven/template-driven.component';
import { DetailsComponent } from './link-list/details/details.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent, LinkListComponent, TasksComponent, TemplateDrivenComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PocModule { }
