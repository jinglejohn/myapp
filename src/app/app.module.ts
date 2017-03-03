import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import {loginComponent} from './components/login/login.component';
import {userComponent} from './components/users/users.component';

const appRoutes: Routes = [
  { path: 'login', component: loginComponent }
];

@NgModule ({
	imports: [ 
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		FormsModule,
		HttpModule 
	],
	declarations: [
		AppComponent,
		loginComponent,
		userComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }

