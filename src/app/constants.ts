import { Injectable } from '@angular/core';

@Injectable()
export class Constants{
    API_URL: string;
    USER_PATH: string;
    AUTH_PATH: string;
    NOTES_PATH: string;

    constructor(){
        this.API_URL = `https://tranquil-cliffs-52392.herokuapp.com/`;
        this.USER_PATH = `${this.API_URL}user/`;
        this.AUTH_PATH = `${this.USER_PATH}auth`
        this.NOTES_PATH = `${this.API_URL}notes/`;
    }
} 


