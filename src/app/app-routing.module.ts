import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CalculadoraPageComponent } from './components/calculadora-page/calculadora-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'calculadora', component: CalculadoraPageComponent},
  {path: 'login', component: AdminPageComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
