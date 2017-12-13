import { ManageComponent } from './manage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router/src/router_module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: "", component: ManageComponent}])
  ],
  declarations: [ManageComponent]
})
export class ManageModule { }
