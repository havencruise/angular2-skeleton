import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'nav-bar',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">{{title}}</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li [routerLinkActive]="['active']">
                        <a [routerLink]="['/dashboard']">Dashboard</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  `
})
export class Nav {
    title = 'Customer Support Center';
}
