import { Component } from '@angular/core';

// You can load Highcharts static if you need its API
const Highcharts = require('highcharts');

// If you want you can load any Highcharts module here: 'highcharts/highcharts-more', 'highcharts/modules/map' and etc.
// See the node_modules/highcharts folders to find a necessary module
const Highcharts3d = require('highcharts/highcharts-3d.src');

// Any Highcharts static API is available throw the Highcharts variable
Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B']
});

// Plug the highcharts-3d module
Highcharts3d(Highcharts);

@Component({
	selector: 'monitoring-cmp',
	templateUrl: './monitoring.component.html'
})

export class MonitoringComponent {
	constructor() {
        this.options = {
            chart: {
                type: 'column',
                margin: 75,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50
                }
            },
            plotOptions1: {
                column: {
                    depth: 25
                }
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        };
    }
    options: Object;
}

