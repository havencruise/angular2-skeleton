import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  styles: [`
    .navbar-default { background-color: #f3f3f3; box-shadow: 2px 3px 3px #ccc; }
    .navbar-header {padding-right:15px;}
  `],
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
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
                <a [routerLink]="['/']">
                  <img src="/static/img/logo.png" height=50 alt="{{title}}" />
                </a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    
                </ul>
            </div>
        </div>
    </nav>
  `
})
export class Nav {
    @Input() title = "Angular2App";
}
