import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
    moduleId: module.id.toString(),
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    constructor(private title: Title) { }

    ngOnInit(): void {
        this.title.setTitle('Hello world');
    }
}