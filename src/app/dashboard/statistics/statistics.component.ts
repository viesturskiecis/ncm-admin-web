import { Component, OnInit } from '@angular/core';

import { Statistics } from '../../_models/statistics/index';
import { StatisticsService } from '../../_services/statistics/index';

import { Case } from '../../_models/case/index';
import { CaseService } from '../../_services/case/index';

@Component({
	selector: 'statistics-cmp',
	templateUrl: './statistics.component.html'
})

export class StatisticsComponent implements OnInit{
    errorMessage: string;
	statistics: Statistics[] = [];

    constructor(private statisticsService: StatisticsService) { }

    ngOnInit() {
        this.getStatistics();
    }

    getStatistics() {
        this.statisticsService.getStatistics()
                     .subscribe(
                       statistics => this.statistics = statistics,
                       error =>  this.errorMessage = <any>error);
    }

}
