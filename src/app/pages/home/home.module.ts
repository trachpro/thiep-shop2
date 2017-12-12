import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
import { RouterModule } from '@angular/router/src/router_module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
