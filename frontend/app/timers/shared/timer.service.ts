import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Timer } from './timer.model';

@Injectable()
export class TimerService {
    private apiUrl = '/api/timers';

    constructor(private http: Http) { }

    public create(timer: Timer): Observable<Timer> {
        return this.http.post(`${this.apiUrl}/timers/`, JSON.stringify(timer))
            .map((r: Response) => r.json().data as Timer);
    }

    public getById(id: number): Observable<Timer> {
        return this.http.get(`${this.apiUrl}/${id}/`)
            .map((r: Response) => r.json().data as Timer);
    }

    public getForUser(owner: string): Observable<Timer[]> {
        return this.http.get(`${this.apiUrl}/owner/`)
            .map((r: Response) => r.json() as Timer[]);
    }
}