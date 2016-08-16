import { provideRouter, RouterConfig }  from '@angular/router';
import { Dashboard } from './containers';

const routes: RouterConfig = [
    { path: '', pathMatch: 'full', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: '**', redirectTo: '/dashboard' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];