import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Highcharts } from 'angular2-highcharts';
require('highcharts/highcharts-more.src')(Highcharts);
require('highcharts/modules/treemap.src')(Highcharts);

@Injectable()
export class Store {
  private _store = new BehaviorSubject(null);;
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

export const LogChartOptions:any = {
    legend: { enabled: false },
    chart: { type: 'line', height: 250 },
    xAxis: { type: 'datetime' },
    yAxis: { title: { text: 'Load' } },
    series: [{
        data: [],     // values - represents the array of {x,y} data points
        name: 'Load', // key  - the name of the series.
        type: 'area',
        color: '#ff7f0e'
    }]
};

export const ContributionChartOptions:any = {
    chart: { type: 'pie', height: 300 },
    plotOptions: {
        pie: {
            dataLabels: { enabled: false },
            showInLegend: true,
            point: {events: {legendItemClick: function(){return false;}}},
            startAngle: -90, endAngle: 90,
        }
    },
    series: [{
        innerSize: '50%',
        data: [], // values - represents the array of [x,y] data points
        name: 'Contributions',
    }]
}

export const TreeMapOptions:any = {
    chart: {type: 'treemap', height: 300 },
    series: [{
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left', verticalAlign: 'top',
                style: { fontSize: '15px', fontWeight: 'bold' }
            }
        }],
        data: []
    }]
};

export const TicketStatsOptions: any = {
    legend: {enabled:false},
    colors: ['#434348', '#8085e9', '#f45b5b', '#f7a35c', '#90ed7d'],
    chart: { type: 'column', height: 200 },
    xAxis: { categories: [] },
    yAxis: { min: 0, title: { text: 'Ticket Status (total)' }},
    plotOptions: { series: { stacking: 'normal'}},
}
