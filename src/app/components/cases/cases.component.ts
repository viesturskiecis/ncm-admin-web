import {Component, OnInit} from '@angular/core';

import { Case } from '../../models/case/index';
import { CaseService } from '../../services/case/index';

// used to create fake backend
import { fakeBackendProvider } from '../../core/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@Component({
	selector: 'cases-cmp',
	templateUrl: './cases.component.html',
    providers: [
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        CaseService
    ]
})

export class CasesComponent  implements OnInit {
    cases: Case[] = [];

    constructor(private caseService: CaseService) { }

    ngOnInit() {
        // get users from secure api end point
        this.caseService.getCases()
            .subscribe(cases => {
                this.cases = cases;
            });
    }

}