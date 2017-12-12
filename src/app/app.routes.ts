import {Routes} from '@angular/router';

export const AppRoutes: Routes = [{
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
    }, {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
    }
]