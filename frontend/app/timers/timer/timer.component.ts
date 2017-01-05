import { Component, OnInit } from '@angular/core';

import { TimerService } from '../shared/timer.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'timer-manager',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    constructor(private timerService: TimerService) {}
    
    ngOnInit(): void {

    }
}