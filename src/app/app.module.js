"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_charts_1 = require("ng2-charts");
var app_component_1 = require("./app.component");
var barchart_component_1 = require("./Charts/barchart.component");
var barchart_service_1 = require("./Charts/barchart.service");
var doughnutchart_component_1 = require("./Charts/doughnutchart.component");
var doughnutchart_service_1 = require("./Charts/doughnutchart.service");
var auto_grow_directive_1 = require("./auto-grow.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, ng2_charts_1.ChartsModule],
        declarations: [app_component_1.AppComponent, auto_grow_directive_1.AutoGrowDirective, barchart_component_1.BarChartDemoComponent, doughnutchart_component_1.DoughnutChartDemoComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [barchart_service_1.BarChartService, doughnutchart_service_1.DoughnutChartService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map