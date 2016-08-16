import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard-container',
    template: require('!raw!../templates/dashboard.html'),
    styles: [],
    providers: [],
    directives: [],
})
export class Dashboard {
    constructor(private router: Router){}
}



