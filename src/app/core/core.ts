/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { Nav, Main, Loading } from './components';
import { StoreHelper } from './services';

@NgModule({
  imports:      [ CommonModule, RouterModule ],
  declarations: [ Nav, Main, Loading ],
  exports:      [ Nav, Main, Loading ],
  providers:    [ StoreHelper ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
