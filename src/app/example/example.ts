import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { Dashboard } from './components';
import { ApiService } from './services';
import { routing } from './routes';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule, routing ],
  declarations: [ Dashboard ],
  providers:    [ ApiService ]
})
export class ExampleModule { }