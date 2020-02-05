import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { DataModule } from './data/data.module';
import { SuperAdminLayoutComponent } from './layout/super-admin-layout/super-admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperAdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
