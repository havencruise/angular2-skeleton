import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'example', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);