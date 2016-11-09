import 'rxjs/add/operator/toPromise';

import { Headers, Http, RequestOptions } from '@angular/http';

import { Constants } from '../constants';
import { Injectable } from '@angular/core';
import { Token } from '../token';
import { TokenService } from './token.service';

@Injectable() 

export class AuthService {
     

    constructor(
        private http: Http,
        private c: Constants,
        private tokenService: TokenService
        ) { 
            
        }

    login(formData): Promise<Token> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.c.AUTH_PATH, formData, options)
            .toPromise()
            .then(response => {
                return response.json()
            })
            .catch(this.handleError);
    }

    register(formData): Promise<Token> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

         return this.http.post(this.c.USER_PATH, JSON.stringify({ formData }), options)
            .toPromise()
            .then(response => response.json().body.token)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
         console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}