import { ListComponent } from './list/list.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UploadComponent } from './upload/upload.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'manage',
        loadChildren: '../manage/manage.module#ManageModule',
    }, {
        path: 'list',
        component: ListComponent
    }, {
        path: 'upload',
        component: UploadComponent
    }
]