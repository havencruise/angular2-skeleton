import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
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
