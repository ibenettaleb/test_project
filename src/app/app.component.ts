import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="container">
  <h1>Hello {{name}}</h1>
  <br />
  <input type="text" autoGrow />
  <br /><br />
  <button 
    class="btn btn-primary" 
    [class.active]="isActive"
    (click)="onClick($event)"
    ><span 
      [class.glyphicon-star]="isActive"
      [class.glyphicon-star-empty]="!isActive"
      class="glyphicon"
      ></span> Submit</button>
  <br />
  <div class="row">
    <div class="col-md-6"><bar-chart-demo></bar-chart-demo></div>
    <div class="col-md-6"><doughnut-chart-demo></doughnut-chart-demo></div>
  </div>
  </div>`
})
export class AppComponent  { 
  name = 'World'; 
  isActive = false;
  onClick($event) {
    $event.stopPropagation();
    this.isActive = !this.isActive;
    console.log("Clicked", $event);
  }
}
