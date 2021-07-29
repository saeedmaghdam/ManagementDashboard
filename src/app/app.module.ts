import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { SettingComponent } from './page/components/setting/setting.component';
import { HomeComponent } from './page/components/home/home.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SiderComponent } from './layout/components/sider/sider.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ProductTableComponent } from './shared/components/product-table/product-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProductService } from './shared/services/product.service';
import { ProductTableActionComponent } from './shared/components/product-table-action/product-table-action.component';
import { ProductComponent } from './page/components/product/product.component';
import { ServiceComponent } from './page/components/service/service.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingComponent,
    HomeComponent,
    SiderComponent,
    FooterComponent,
    ProductTableComponent,
    ProductTableActionComponent,
    ProductComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDropDownModule,
    NzTableModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
