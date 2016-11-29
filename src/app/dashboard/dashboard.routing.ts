import { Route } from '@angular/router';

import { AuthGuard } from '../core/guards/index';

import { CasesRoutes } from '../components/cases/index';
import { StatisticsRoutes } from '../components/statistics/index';
import { MonitoringRoutes } from '../components/monitoring/index';

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
