import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CalculadoraPageComponent } from './components/calculadora-page/calculadora-page.component';
import { NavbarUnloggedComponent } from './components/navbar-unlogged/navbar-unlogged.component';
import { NavbarLoggedComponent } from './components/navbar-logged/navbar-logged.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdminPageComponent,
    CalculadoraPageComponent,
    NavbarUnloggedComponent,
    NavbarLoggedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
