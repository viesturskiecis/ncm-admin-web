import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AlertService, AuthenticationService } from '../../services/index';

// used to create fake backend
import { fakeBackendProvider } from '../../core/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        AlertService,
        AuthenticationService
    ]
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}