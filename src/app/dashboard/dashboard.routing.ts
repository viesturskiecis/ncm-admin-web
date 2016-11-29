import { Route } from '@angular/router';

import { AuthGuard } from '../_guards/index';

import { CasesRoutes } from './cases/index';
import { StatisticsRoutes } from './statistics/index';
import { MonitoringRoutes } from './monitoring/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
        canActivate: [AuthGuard],
    	children: [
        ...CasesRoutes,
	    	...StatisticsRoutes,
	    	...MonitoringRoutes
    	]
  	}
];
