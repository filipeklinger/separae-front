import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';


import { HomeComponent } from './components/home/home.component';
import { NavbarUnloggedComponent } from './components/navbar-unlogged/navbar-unlogged.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarOpt2Component } from './components/navbar-opt2/navbar-opt2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUnloggedComponent,
    HomeComponent,
    AdminComponent,
    NavbarOpt2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
