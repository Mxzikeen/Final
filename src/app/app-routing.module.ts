import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';

const routes: Routes = [
  {path: '',component: LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddVehicleComponent},
  {path:'view',component:ViewVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
