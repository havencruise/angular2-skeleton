import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'main-container',
    styles: [
        // require('style!../static/css/main.css').toString(),
    ],
    template: `
        <div>
            <nav-bar [title]="app_name"></nav-bar>
            <router-outlet></router-outlet>
        </div>
    `
})
export class Main {
    public app_name = "Example";
    constructor(private router: Router) {}
}
