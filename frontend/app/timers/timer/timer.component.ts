import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Timer, TimerType } from '../shared/timer.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    @Input() timer: Timer;
    @Output() onCompletion = new EventEmitter<Timer>();

    displayString: string;

    constructor() { }

    ngOnInit(): void {
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
                (this.timer.type === TimerType.Timer && 
                this.timer.duration <= 0)){
                this.onCompletion.emit(this.timer);
                clearInterval(int);
            }

            if (this.timer.type == TimerType.Timer){
                this.timer.duration--;
            } else {
                this.timer.duration++;
            }

            this.displayString = this.getTimerText(this.timer);
        }, interval);
    }

    private getTimerText(timer: Timer): string {
        if(!timer) {
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
}