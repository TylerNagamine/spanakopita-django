webpackJsonp([1],{

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(1);
const platform_browser_1 = __webpack_require__(50);
const app_component_1 = __webpack_require__(669);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ },

/***/ 401:
/***/ function(module, exports) {

module.exports = "<p>Hello world!</p>";

/***/ },

/***/ 402:
/***/ function(module, exports) {

module.exports = "html {\n  background-color: red; }\n"

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(1);
const platform_browser_1 = __webpack_require__(50);
let AppComponent = class AppComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle("Hello world");
    }
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.i.toString(),
        selector: 'my-app',
        template: __webpack_require__(401),
        styles: [__webpack_require__(402)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";

const platform_browser_dynamic_1 = __webpack_require__(119);
const app_module_1 = __webpack_require__(292);
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);


/***/ }

},[670]);