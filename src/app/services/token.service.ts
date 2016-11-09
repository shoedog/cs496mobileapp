import { Injectable } from '@angular/core';
import { Token } from '../token';

@Injectable() 
export class TokenService {
     constructor() {}

     private _authToken: Token;

     get authToken(): Token {
         return this._authToken;
     }

     set authToken(newToken: Token) {
         this._authToken = newToken;
     }
}