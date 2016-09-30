import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Highcharts } from 'angular2-highcharts';
require('highcharts/highcharts-more.src')(Highcharts);
require('highcharts/modules/treemap.src')(Highcharts);


const _store = new BehaviorSubject({
    config: any[]
});

@Injectable()
export class Store {
    private _store = _store;
    changes = this._store.asObservable().distinctUntilChanged()

    setState(state: any) {
        this._store.next(state);
    }

    getState(): any {
        return this._store.value;
    }

    purge() {
        this._store.next(null);
    }
}

declare let d3: any;
Highcharts.setOptions({
    legend: {
        align: 'left', verticalAlign: 'bottom',
        x: 0, y: 0, floating: true,
        width: 600, itemWidth: 300,
        itemMarginBottom: 5,
        itemStyle: { "fontFamily": "Open Sans" },
    },
    loading: {
        hideDuration: 250,
        style: {
            background: 'url("/static/img/loader.gif") 49% 55% no-repeat',
            position: 'absolute', top: '45%', left: '45%',
            backgroundColor: '#fff'
        }
    },
    credits: { enabled: false },
    title : { text : '' },
});
