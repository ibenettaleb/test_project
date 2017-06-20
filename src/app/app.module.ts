import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppComponent }  from './app.component';
import { BarChartDemoComponent } from './Charts/barchart.component';

@NgModule({
  imports:      [ BrowserModule, ChartsModule ],
  declarations: [ AppComponent, BarChartDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
