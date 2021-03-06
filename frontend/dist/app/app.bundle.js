webpackJsonp([1],{

/***/ 183:
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
    update(timer) {
        return new Promise((resolve, reject) => {
            console.log('Updated timer');
            resolve();
        });
    }
    onError() {
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

module.exports = "<div class=\"timer-container\">\n    <timer \n        *ngFor=\"let timer of Timers | async\"\n        [timer]=\"timer\"\n        (onCompletion)=\"onCompletion($event)\">\n    </timer>\n    <div class=\"clear\"></div>\n</div>\n";

/***/ },

/***/ 404:
/***/ function(module, exports) {

module.exports = "<div class=\"timer\">\n    <div class=\"timer-time\">{{ displayString }}</div>\n    <button class=\"spk-button\" (click)=\"start()\" [ngClass]=\"{ active: isActive() }\">Start timer</button>\n    <button class=\"spk-button\" (click)=\"stop()\" [ngClass]=\"{ active: !isActive() }\">Stop timer</button>\n</div>";

/***/ },

/***/ 405:
/***/ function(module, exports) {

module.exports = "html {\n  background-color: red;\n  font-family: 'Montserrat', sans-serif; }\n\n.clear {\n  clear: both; }\n\n.spk-button {\n  border: solid 0;\n  background-color: lightgreen;\n  padding: 5px 10px; }\n\n.spk-button.active {\n  background-color: #189a18; }\n\n.spk-button:active:focus {\n  background-color: #38e038; }\n\n.spk-button:hover {\n  background-color: #64e764; }\n\n.spk-button:focus {\n  outline-width: 1px;\n  outline-color: #64e764; }\n"

/***/ },

/***/ 406:
/***/ function(module, exports) {

module.exports = ".timer-container {\n  background-color: green;\n  padding: 5px; }\n\n.timer {\n  min-width: 200px;\n  display: block;\n  clear: right;\n  float: left; }\n\n@media screen and (min-width: 320px) {\n  .timer {\n    width: 200px; } }\n"

/***/ },

/***/ 407:
/***/ function(module, exports) {

module.exports = ".timer {\n  background-color: yellow;\n  text-align: center;\n  padding: 7px;\n  margin: 5px; }\n  .timer .timer-time {\n    padding: 5px;\n    font-size: larger;\n    font-weight: 1000; }\n  .timer button {\n    margin: 3px; }\n"

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
        this.title.setTitle('Hello world');
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
const timer_service_1 = __webpack_require__(183);
let TimerManagerComponent = class TimerManagerComponent {
    constructor(timerService) {
        this.timerService = timerService;
    }
    ngOnInit() {
        this.Timers = this.timerService.getForUser('arloste');
    }
    onCompletion(timer) {
        console.log('timer completed ' + (timer && timer.type));
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
const timer_service_1 = __webpack_require__(183);
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
const timer_service_1 = __webpack_require__(183);
let TimerComponent = class TimerComponent {
    constructor(timerService) {
        this.timerService = timerService;
        this.onCompletion = new core_1.EventEmitter();
        this.interval = null;
        this.ticks = 0;
        this.ticksToUpdate = 5;
    }
    ngOnInit() {
        if (this.timer &&
            typeof this.timer.duration !== 'undefined') {
            this.displayString = this.getTimerText();
        }
    }
    isActive() {
        return this.interval != null;
    }
    isComplete() {
        if (this.timer.type === timer_model_1.TimerType.Stopwatch ||
            this.timer.duration > 0) {
            return false;
        }
        return true;
    }
    start() {
        const interval = 1000;
        this.interval = window.setInterval(() => {
            if (!this.timer) {
                this.completeInterval();
            }
            this.tick();
            if (this.isComplete()) {
                this.completeInterval();
                this.complete();
            }
            this.displayString = this.getTimerText();
        }, interval);
    }
    stop() {
        this.completeInterval();
    }
    getTimerText() {
        if (!this.timer.duration) {
            this.timer.duration = 0;
        }
        let minutes = Math.floor(this.timer.duration / 60);
        let seconds = this.timer.duration % 60;
        let displaySeconds = ('0' + seconds).slice(-2);
        return `${minutes}:${displaySeconds}`;
    }
    complete() {
        this.onCompletion.emit(this.timer);
    }
    completeInterval() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    tick(update = true) {
        if (this.timer.type === timer_model_1.TimerType.Timer) {
            this.timer.duration--;
        }
        else {
            this.timer.duration++;
        }
        this.ticks++;
        if (update) {
            if (this.ticks === this.ticksToUpdate) {
                this.timerService.update(this.timer);
                this.ticks = 0;
            }
        }
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
    __metadata("design:paramtypes", [timer_service_1.TimerService])
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