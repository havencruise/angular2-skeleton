import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from '../services';
import { Store } from '../../store';


@Component({
    selector: 'dashboard-container',
    template: `
        <div class="container" id="main-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="well well-md">Nothing here yet.</div>
                </div>
            </div>
        </div>
    `,
    styles: [],
})
export class Dashboard {
    constructor(private router: Router,
                private genericService: ApiService,
                private store: Store) {

    }
}



