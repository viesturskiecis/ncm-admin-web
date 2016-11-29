import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MonitoringComponent } from './monitoring.component';

import { ChartModule } from 'angular2-highcharts';

@NgModule({
    imports: [RouterModule, ChartModule],
    declarations: [MonitoringComponent],
    exports: [MonitoringComponent]
})

export class MonitoringModule { }
