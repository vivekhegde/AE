import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { TemplateDrivenComponent } from './components/poc/form-validations/template-driven/template-driven.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'links',
        component: LinkListComponent
    },
    {
        path: 'poc/validation',
        component: TemplateDrivenComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
