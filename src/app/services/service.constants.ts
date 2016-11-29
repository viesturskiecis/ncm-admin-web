import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
@Injectable()
export class Configuration {
    public server: string = "http://localhost:9090/";
    public apiUrl: string = "api/";
    public serverWithApiUrl = this.server + this.apiUrl;
    public username: string = 'ncm';
    public password: string = 'ncm';
    public headers: Headers = new Headers();

    constructor() {
    	this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", "Basic " + btoa(this.username + ":" + this.password));
    }
}