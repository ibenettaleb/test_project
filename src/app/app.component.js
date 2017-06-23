"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'World';
        this.isActive = false;
    }
    AppComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        this.isActive = !this.isActive;
        console.log("Clicked", $event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"container\">\n  <h1>Hello {{name}}</h1>\n  <br />\n  <input type=\"text\" autoGrow />\n  <br /><br />\n  <button \n    class=\"btn btn-primary\" \n    [class.active]=\"isActive\"\n    (click)=\"onClick($event)\"\n    ><span \n      [class.glyphicon-star]=\"isActive\"\n      [class.glyphicon-star-empty]=\"!isActive\"\n      class=\"glyphicon\"\n      ></span> Submit</button>\n  <br />\n  <div class=\"row\">\n    <div class=\"col-md-6\"><bar-chart-demo></bar-chart-demo></div>\n    <div class=\"col-md-6\"><doughnut-chart-demo></doughnut-chart-demo></div>\n  </div>\n  </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map