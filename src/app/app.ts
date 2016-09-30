import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core';
import { ExampleModule } from './example';
import { routing } from './routes';
import { Store } from './store';

// The app component
@Component({
    selector: 'app',
    styles: [
        require('style!../../node_modules/bootstrap/dist/css/bootstrap.min.css').toString(),
        require('style!../static/css/main.css').toString(),
    ],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

// The app module
@NgModule({
    imports:      [
        BrowserModule, HttpModule, FormsModule,
        ExampleModule,
        CoreModule.forRoot(),
        routing
    ],
    declarations: [ AppComponent ],
    providers:    [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        Store,
        // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        // { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
