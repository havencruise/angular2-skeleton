// The usual bootstrapping imports
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// // Imports for loading & configuring the in-memory web api
// import { XHRBackend } from '@angular/http';
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './in-memory-data.service';

import { AppModule } from './app';


// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    // enableProdMode();
}

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule)
}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}
