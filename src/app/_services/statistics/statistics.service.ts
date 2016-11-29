import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../service.constants';
 
import { Statistics } from '../../_models/statistics/index';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class StatisticsService {

    private url: string;
    private uri: string = 'statistics/';
    private headers: Headers;


    constructor(private http: Http, private configuration: Configuration) {
        this.url = configuration.serverWithApiUrl + this.uri;
        this.headers = configuration.headers;
     }
 
    getStatistics() {
        return this.http.get(
          this.url, { headers: this.headers })
          .map((response: Response) => response.json())
          .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        console.log(body.data);
        return body.data;
    }
    
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
          console.error(body);
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }
 
}