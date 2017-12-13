import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
import { RouterModule } from '@angular/router/src/router_module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SubListComponent } from './list/sub-list/sub-list.component';
import { RegistProductComponent } from './regist-product/regist-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ImageComponent } from './upload/image/image.component';
import { UploadComponent } from './upload/upload.component';
import { ItemComponent } from './list/sub-list/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent, 
    ListComponent, 
    SubListComponent, 
    RegistProductComponent, 
    UpdateProductComponent, 
    ImageComponent, 
    UploadComponent, 
    ItemComponent
  ],
  entryComponents: [
    UploadComponent
  ]
})
export class HomeModule { }
