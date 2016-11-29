import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StatisticsComponent } from './statistics.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [StatisticsComponent],
    exports: [StatisticsComponent]
})

export class StatisticsModule { }
