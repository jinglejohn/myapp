import {Component} from '@angular/core';
import{Router} from '@angular/router';
import {loginService} from './login.service';

@Component({
	selector:'login',
	templateUrl:'app/components/login/login.component.html',
	styleUrls:['app/components/login/login.component.css'],
	providers:[loginService]
	})


export class loginComponent{

	constructor(private loginService:loginService,private router:Router ){};

	title = 'Tour of Heroes';
	text = 'Login';
	username = '';
	password = '';
	data = '';
	hero: Hero = {
		id: 1,
		name: 'Armstrong'
	};

	login(event:any){
		let object = {
			"username":this.username,
			"password":this.password

		}

		this.loginService.auth(object)
			.then(data => {localStorage.setItem('authToken', data);})
			.catch(error => console.log(error));
	}
}

export class Hero
{
	id: number;
	name: string;
}