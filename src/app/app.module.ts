import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule }  from 'ng2-charts';
import { AppComponent }  from './app.component';
import { BarChartDemoComponent } from './Charts/barchart.component';
import { BarChartService } from './Charts/barchart.service';
import { DoughnutChartDemoComponent } from './Charts/doughnutchart.component';
import { DoughnutChartService } from './Charts/doughnutchart.service';
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ChartsModule ],
  declarations: [ AppComponent, AutoGrowDirective, BarChartDemoComponent, DoughnutChartDemoComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ BarChartService, DoughnutChartService ]
})
export class AppModule { 
  
}
