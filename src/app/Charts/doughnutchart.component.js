"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var doughnutchart_service_1 = require("./doughnutchart.service");
require("rxjs/Rx");
var DoughnutChartDemoComponent = (function () {
    function DoughnutChartDemoComponent(doughnutChartService) {
        this.doughnutChartService = doughnutChartService;
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    DoughnutChartDemoComponent.prototype.ngOnInit = function () {
        this.getChartLabels();
    };
    DoughnutChartDemoComponent.prototype.getChartLabels = function () {
        var _this = this;
        this.doughnutChartService.getDoughnutChartLabels().subscribe(function (data) {
            _this.doughnutChartLabels = data.doughnutChartLabels;
        }, function (err) { return console.error(err); }, function () { return console.log('done loading labels \n'); });
    };
    // events
    DoughnutChartDemoComponent.prototype.chartClicked = function (e) { };
    DoughnutChartDemoComponent.prototype.chartHovered = function (e) { };
    return DoughnutChartDemoComponent;
}());
DoughnutChartDemoComponent = __decorate([
    core_1.Component({
        selector: 'doughnut-chart-demo',
        templateUrl: './doughnut-chart-demo.html'
    }),
    __metadata("design:paramtypes", [doughnutchart_service_1.DoughnutChartService])
], DoughnutChartDemoComponent);
exports.DoughnutChartDemoComponent = DoughnutChartDemoComponent;
//# sourceMappingURL=doughnutchart.component.js.map