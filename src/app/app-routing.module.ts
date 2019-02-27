import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{
  path:'Login',
  component:LoginComponent
},
{
  path:'Home',
  component:HomeComponent
},
{
  path:'Register',
  component:RegisterComponent
},
{
  path:'',
  component:DashboardComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
