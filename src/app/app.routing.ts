import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { LoginRoutes, LoginComponent } from './login';
import { RegisterRoutes, RegisterComponent } from './register';
import { DashboardRoutes, DashboardComponent } from './dashboard';
import { CasesComponent } from './dashboard/cases/index';
import { StatisticsComponent } from './dashboard/statistics/index';
import { MonitoringComponent } from './dashboard/monitoring/index';

const appRoutes: Routes = [
	//...LoginRoutes,
	//...RegisterRoutes,
	//...DashboardRoutes,
	{ 
		path: 'login', 
		component: LoginComponent 
	},
	{ 
		path: 'register', 
		component: RegisterComponent 
	},
	{ 
		path: 'dashboard', 
		component: DashboardComponent, 
		canActivate: [AuthGuard], 
		children:[
			{
				path: 'cases',
				component: CasesComponent
			},
			{
				path: 'statistics',
				component: StatisticsComponent
			},
			{
				path: 'monitoring',
				component: MonitoringComponent
			},
			{
				path: '',
				component: CasesComponent
			}
		]
	},
	{ 
		path: '', 
		redirectTo: '/login', 
		pathMatch: 'full' 
	},

    // otherwise redirect to home
    { path: '**', component: LoginComponent }
];

export const routing = RouterModule.forRoot(appRoutes);