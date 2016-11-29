import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

import { Configuration } from './services/service.constants';

 
// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
import { AlertComponent } from './core/directives/index';
import { AuthGuard } from './core/guards/index';
import { AlertService, AuthenticationService, UserService} from './services/index';
import { CaseService } from './services/case/index';
import { StatisticsService } from './services/statistics/index';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LoginModule,
        RegisterModule,
        DashboardModule,
        SharedModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CaseService,
        StatisticsService,
        Configuration
        // providers used to create fake backend (doesn`t let through any requests)
        //fakeBackendProvider,
        //MockBackend,
        //BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }