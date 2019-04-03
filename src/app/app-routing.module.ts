import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
