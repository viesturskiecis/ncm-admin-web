import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent]
})

export class RegisterModule { }