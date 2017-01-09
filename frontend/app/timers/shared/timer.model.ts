
export class TimerType {
    public static Timer = 't';
    public static Stopwatch = 'sw';
}

export class Timer {
    public created: Date;
    public duration: number;
    public owner: string;
    public title: string;
    public type: TimerType;
}