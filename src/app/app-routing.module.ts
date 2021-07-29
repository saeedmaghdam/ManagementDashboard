import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/components/home/home.component';
import { ProductComponent } from './page/components/product/product.component';
import { ServiceComponent } from './page/components/service/service.component';
import { SettingComponent } from './page/components/setting/setting.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "setting",
    component: SettingComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "service",
    component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
