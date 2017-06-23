import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BarChartService {
    constructor(private http:Http) {
    }
    getBarChartLabels() {
        return this.http.get('app/Charts/barchartLabels.json').map((res:Response) => res.json());
    }
}