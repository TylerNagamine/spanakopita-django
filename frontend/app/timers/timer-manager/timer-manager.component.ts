import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Timer } from '../shared/timer.model';
import { TimerService } from '../shared/timer.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'timer-manager',
    templateUrl: './timer-manager.component.html',
    styleUrls: ['./timer-manager.component.scss']
})
export class TimerManagerComponent implements OnInit {
    private Timers: Observable<Timer[]>;
    
    constructor(private timerService: TimerService) {}
    
    ngOnInit(): void {
        
    }

    onCompletion(timer: Timer): void {
        console.log('timer completed ' + (timer && timer.type));
    }

    populate(): void {
        this.Timers = this.timerService.getForUser('arloste');
    }
}