import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TimerManagerComponent } from './timer-manager/timer-manager.component';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './shared/timer.service';

@NgModule({
    declarations: [
        TimerManagerComponent,
        TimerComponent
    ],
    providers: [
        TimerService
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [TimerManagerComponent]
})
export class TimerModule { }