import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DoughnutChartService {
    constructor(private http:Http) {
    }
    getDoughnutChartLabels() {
        return this.http.get('app/Charts/doughnutchartLabels.json').map((res:Response) => res.json());
    }
}