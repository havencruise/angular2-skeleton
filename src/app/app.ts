import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Nav } from './ui';

@Component({
    selector: 'app',
    directives: [ Nav, ROUTER_DIRECTIVES ],
    styles: [
        require('style!../../node_modules/bootstrap/dist/css/bootstrap.min.css').toString(),
        require('style!../static/css/main.css').toString()
    ],
    template: `
        <nav-bar></nav-bar>
        <div class="container-fluid" id="main-body">
            <router-outlet> </router-outlet>
        </div>
    `
})
export class App {}