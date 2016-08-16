// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './in-memory-data.service';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { App, APP_ROUTER_PROVIDERS, providers } from './app';

bootstrap(App, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ...providers,
    // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    // { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);
