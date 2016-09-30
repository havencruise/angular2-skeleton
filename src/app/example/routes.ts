import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { Main } from '../core/components';
import { Dashboard }    from './components';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { 
        path: 'example', 
        component: Main,
        children: [
            { path: '', component: Dashboard },
        ]
    }
]);
