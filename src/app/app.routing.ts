import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/index';

import { LoginRoutes, LoginComponent } from './components/login';
import { RegisterRoutes, RegisterComponent } from './components/register';
import { DashboardRoutes, DashboardComponent } from './dashboard';
import { CasesComponent } from './components/cases/index';
import { StatisticsComponent } from './components/statistics/index';
import { MonitoringComponent } from './components/monitoring/index';

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