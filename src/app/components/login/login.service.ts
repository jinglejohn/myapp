import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class loginService{
	constructor (private http: Http) {};

	private Url = 'http://localhost:5000/auth';  // URL to web api

	auth(object): Promise<string>{
		return this.http.post(this.Url, object)
		.toPromise()
		.then(response=> response.json().data)
		.catch(this.handleError);
	}


	private handleError(error:any): Promise <any>
	{
			console.error('An error occured',error);
			return Promise.reject (error.message || error );
	}
}