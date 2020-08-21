import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { RegisterComponent } from './register/register.component';
import {ModuleWithProviders} from '@angular/core';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/home',
    pathMatch: 'full',
  
    
  },
  {
    path: 'home',
    component: HomePage
  },

  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
  
    
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'login',
    component: LoginComponent
  }

  
  // {
  //   path: '/register',
  //   component: RegisterComponent
  // }
 
];


//export class AppRoutingModule : ModuleWithProviders = RouterModule.forRoot(routes); 

export const AppRoutingModule:   ModuleWithProviders = RouterModule.forRoot(routes); 
