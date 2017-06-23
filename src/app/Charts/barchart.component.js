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
var barchart_service_1 = require("./barchart.service");
require("rxjs/Rx");
var BarChartDemoComponent = (function () {
    function BarChartDemoComponent(barChartService) {
        this.barChartService = barChartService;
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { "data": [65, 59, 80, 81, 56, 55, 41], "label": "Series A" },
            { "data": [28, 48, 40, 19, 86, 27, 90], "label": "Series B" },
            { "data": [36, 88, 45, 25, 16, 37, 44], "label": "Series C" }
        ];
    }
    BarChartDemoComponent.prototype.ngOnInit = function () {
        this.getChartLabels();
    };
    BarChartDemoComponent.prototype.getChartLabels = function () {
        var _this = this;
        this.barChartService.getBarChartLabels().subscribe(function (data) {
            _this.barChartLabels = data.barChartLabels,
                _this.barChartDataApi = data.barChartData;
        }, function (err) { return console.error(err); }, function () { return console.log('done loading labels \n' + _this.barChartDataApi[0].data); });
    };
    // events
    BarChartDemoComponent.prototype.chartClicked = function (e) { };
    BarChartDemoComponent.prototype.chartHovered = function (e) { };
    return BarChartDemoComponent;
}());
BarChartDemoComponent = __decorate([
    core_1.Component({
        selector: 'bar-chart-demo',
        templateUrl: './bar-chart-demo.html'
    }),
    __metadata("design:paramtypes", [barchart_service_1.BarChartService])
], BarChartDemoComponent);
exports.BarChartDemoComponent = BarChartDemoComponent;
//# sourceMappingURL=barchart.component.js.map