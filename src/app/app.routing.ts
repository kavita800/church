import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MobileVideoComponent } from './mobile-video/mobile-video.component';
import { InteractiveComponent } from './interactive/interactive.component';

const routes: Routes =[
    // { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'home',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'interactive',          component: InteractiveComponent },
    { path: 'about-us', component: AboutUsComponent},
    { path: 'mobile-video/:page', component: MobileVideoComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
