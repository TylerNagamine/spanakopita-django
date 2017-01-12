import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Timer, TimerType } from '../shared/timer.model';
import { TimerService } from '../shared/timer.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    @Input() timer: Timer;
    @Output() onCompletion = new EventEmitter<Timer>();

    public displayString: string;
    private interval: number = null;
    private ticks = 0;
    private ticksToUpdate = 5;

    constructor(private timerService: TimerService) { }

    public ngOnInit(): void {
        if (this.timer && 
            typeof this.timer.duration !== 'undefined') {
            this.displayString = this.getTimerText();
        }
    }

    public isActive(): boolean {
        return this.interval != null;
    }

    public isComplete(): boolean {
        if (this.timer.type === TimerType.Stopwatch ||
            this.timer.duration > 0) {
            return false;
        }

        return true;
    }

    public start(): void {
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

    public stop(): void {
        this.completeInterval();
    }

    public getTimerText(): string {
        if (!this.timer.duration) {
            this.timer.duration = 0;
        }

        let minutes = Math.floor(this.timer.duration / 60);
        let seconds = this.timer.duration % 60;
        let displaySeconds = ('0' + seconds).slice(-2);

        return `${minutes}:${displaySeconds}`;
    }

    private complete(): void {
        this.onCompletion.emit(this.timer);
    }

    private completeInterval(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    private tick(update = true): void {
        if (this.timer.type === TimerType.Timer) {
            this.timer.duration--;
        } else {
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
}