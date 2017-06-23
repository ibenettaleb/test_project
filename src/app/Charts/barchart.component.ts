import { Component } from '@angular/core';
import { BarChartService } from './barchart.service';
import 'rxjs/Rx';
 
@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar-chart-demo.html'
})
export class BarChartDemoComponent {

  public barChartLabels:number[];
  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
        {"data" : [65, 59, 80, 81, 56, 55, 41], "label" : "Series A"},
        {"data" : [28, 48, 40, 19, 86, 27, 90], "label" : "Series B"},
        {"data" : [36, 88, 45, 25, 16, 37, 44], "label" : "Series C"}
    ];
  public barChartDataApi:any[];

  constructor (private barChartService: BarChartService) { }

  ngOnInit() {
    this.getChartLabels();
  }

  getChartLabels() {
    this.barChartService.getBarChartLabels().subscribe(
      data => { 
        this.barChartLabels = data.barChartLabels,
        this.barChartDataApi = data.barChartData
      },
      err => console.error(err),
      () => console.log('done loading labels \n' + this.barChartDataApi[0].data)
    );
  }
 
  // events
  public chartClicked(e:any):void { }
 
  public chartHovered(e:any):void { }
 
}