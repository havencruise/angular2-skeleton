import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'loading',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <div style="position: absolute; width: 100%;text-align: center;">
        <div>{{loadingText}}</div>
        <img src="/static/img/loader.gif" alt="{{loadingText}}">
    </div>
  `
})
export class Loading {
    @Input() loadingText:string = "Loading";
}
