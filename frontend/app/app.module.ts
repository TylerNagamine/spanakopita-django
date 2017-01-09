import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerModule } from './timers/timer.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TimerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }