
export enum TimerType {
    Timer,
    Stopwatch
}

export class Timer {
    public Created: Date;
    public Duration: number;
    public Owner: string;
    public Title: string;
    public Type: TimerType;
}