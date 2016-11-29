import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CasesComponent } from './cases.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CasesComponent],
    exports: [CasesComponent]
})

export class CasesModule { }
