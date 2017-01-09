webpackJsonp([1],{

/***/ 289:
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
const http_1 = __webpack_require__(119);
let TimerService = class TimerService {
    constructor(http) {
        this.http = http;
        this.apiUrl = '/api/timers';
    }
    create(timer) {
        return this.http.post(`${this.apiUrl}/timers/`, JSON.stringify(timer))
            .map((r) => r.json().data);
    }
    getById(id) {
        return this.http.get(`${this.apiUrl}/${id}/`)
            .map((r) => r.json().data);
    }
    getForUser(owner) {
        return this.http.get(`${this.apiUrl}/owner/`)
            .map((r) => r.json());
    }
};
TimerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TimerService);
exports.TimerService = TimerService;


/***/ },

/***/ 293:
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
const platform_browser_1 = __webpack_require__(51);
const app_component_1 = __webpack_require__(674);
const timer_module_1 = __webpack_require__(677);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            timer_module_1.TimerModule
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ },

/***/ 402:
/***/ function(module, exports) {

module.exports = "<p>Hello world!</p>\n<timer-manager></timer-manager>";

/***/ },

/***/ 403:
/***/ function(module, exports) {

module.exports = "<div class=\"timer-container\">\n    <button (click)=\"populate()\">Populate array</button>\n        <timer \n            *ngFor=\"let timer of Timers | async\"\n            [timer]=\"timer\"\n            (onCompletion)=\"onCompletion($event)\">\n        </timer>\n</div>\n";

/***/ },

/***/ 404:
/***/ function(module, exports) {

module.exports = "<div class=\"timer\">\n    <div class=\"timer-time\">{{ displayString }}</div>\n    <button (click)=\"start()\">Start timer</button>\n    <button (click)=\"complete()\">Complete timer </button>\n</div>";

/***/ },

/***/ 405:
/***/ function(module, exports) {

module.exports = "html {\n  background-color: red; }\n"

/***/ },

/***/ 406:
/***/ function(module, exports) {

module.exports = ".timer-container {\n  min-width: 200px;\n  min-height: 200px; }\n"

/***/ },

/***/ 407:
/***/ function(module, exports) {

module.exports = ".timer {\n  width: 200px;\n  height: 100px;\n  background-color: yellow;\n  text-align: center;\n  margin: 10px; }\n"

/***/ },

/***/ 674:
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
const platform_browser_1 = __webpack_require__(51);
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
        template: __webpack_require__(402),
        styles: [__webpack_require__(405)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

"use strict";

class TimerType {
}
TimerType.Timer = 't';
TimerType.Stopwatch = 'sw';
exports.TimerType = TimerType;
class Timer {
}
exports.Timer = Timer;


/***/ },

/***/ 676:
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
const timer_service_1 = __webpack_require__(289);
let TimerManagerComponent = class TimerManagerComponent {
    constructor(timerService) {
        this.timerService = timerService;
    }
    ngOnInit() {
    }
    onCompletion(timer) {
        console.log('timer completed ' + (timer && timer.type));
    }
    populate() {
        this.Timers = this.timerService.getForUser('arloste');
    }
};
TimerManagerComponent = __decorate([
    core_1.Component({
        moduleId: module.i.toString(),
        selector: 'timer-manager',
        template: __webpack_require__(403),
        styles: [__webpack_require__(406)]
    }),
    __metadata("design:paramtypes", [timer_service_1.TimerService])
], TimerManagerComponent);
exports.TimerManagerComponent = TimerManagerComponent;


/***/ },

/***/ 677:
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
const common_1 = __webpack_require__(50);
const http_1 = __webpack_require__(119);
const timer_manager_component_1 = __webpack_require__(676);
const timer_component_1 = __webpack_require__(678);
const timer_service_1 = __webpack_require__(289);
let TimerModule = class TimerModule {
};
TimerModule = __decorate([
    core_1.NgModule({
        declarations: [
            timer_manager_component_1.TimerManagerComponent,
            timer_component_1.TimerComponent
        ],
        providers: [
            timer_service_1.TimerService
        ],
        imports: [
            common_1.CommonModule,
            http_1.HttpModule
        ],
        exports: [timer_manager_component_1.TimerManagerComponent]
    }),
    __metadata("design:paramtypes", [])
], TimerModule);
exports.TimerModule = TimerModule;


/***/ },

/***/ 678:
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
const timer_model_1 = __webpack_require__(675);
let TimerComponent = class TimerComponent {
    constructor() {
        this.onCompletion = new core_1.EventEmitter();
    }
    ngOnInit() {
        if (this.timer &&
            typeof this.timer.duration !== 'undefined') {
            this.displayString = this.getTimerText(this.timer);
        }
    }
    complete() {
        this.onCompletion.emit(this.timer);
    }
    start() {
        const interval = 1000;
        let int = setInterval(() => {
            if (!this.timer ||
                (this.timer.type === timer_model_1.TimerType.Timer &&
                    this.timer.duration <= 0)) {
                this.onCompletion.emit(this.timer);
                clearInterval(int);
            }
            if (this.timer.type == timer_model_1.TimerType.Timer) {
                this.timer.duration--;
            }
            else {
                this.timer.duration++;
            }
            this.displayString = this.getTimerText(this.timer);
        }, interval);
    }
    getTimerText(timer) {
        if (!timer) {
            throw Error("Timer is null in getTimerText");
        }
        if (!timer.duration) {
            timer.duration = 0;
        }
        let minutes = Math.floor(timer.duration / 60);
        let seconds = timer.duration % 60;
        let displaySeconds = ("0" + seconds).slice(-2);
        return `${minutes}:${displaySeconds}`;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", timer_model_1.Timer)
], TimerComponent.prototype, "timer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TimerComponent.prototype, "onCompletion", void 0);
TimerComponent = __decorate([
    core_1.Component({
        moduleId: module.i.toString(),
        selector: 'timer',
        template: __webpack_require__(404),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);
exports.TimerComponent = TimerComponent;


/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";

const platform_browser_dynamic_1 = __webpack_require__(120);
const app_module_1 = __webpack_require__(293);
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);


/***/ }

},[679]);