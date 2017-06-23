import { Component } from '@angular/core';
import { DoughnutChartService } from './doughnutchart.service';
import 'rxjs/Rx';
 
@Component({
  selector: 'doughnut-chart-demo',
  templateUrl: './doughnut-chart-demo.html'
})
export class DoughnutChartDemoComponent {
  // Doughnut
  public doughnutChartLabels:string[];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor (private doughnutChartService: DoughnutChartService) { }

  ngOnInit() {
    this.getChartLabels();
  }

  getChartLabels() {
    this.doughnutChartService.getDoughnutChartLabels().subscribe(
      data => { 
        this.doughnutChartLabels = data.doughnutChartLabels
      },
      err => console.error(err),
      () => console.log('done loading labels \n')
    );
  }
 
  // events
  public chartClicked(e:any):void { }
 
  public chartHovered(e:any):void { }
}