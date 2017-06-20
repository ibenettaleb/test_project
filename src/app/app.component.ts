import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br /><bar-chart-demo></bar-chart-demo>`,
})
export class AppComponent  { name = 'World'; }
