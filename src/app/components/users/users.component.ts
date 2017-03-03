import {Component} from '@angular/core';
import{Router} from '@angular/router';
import {userService} from './users.service';

@Component ({
	selector: 'users',
	templateUrl: 'app/components/users/user.component.html',
	styleUrls: ['app/components/users/user.component.css'],
	providers: [userService]
	})


export class userComponent{

	public userlists =[
		{username: "Mac" },
		{username: "Rob"},
		{username:"Chris"}
	];
}