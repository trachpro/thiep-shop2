import {Routes} from '@angular/router';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },{
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
    }, {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
    }
]