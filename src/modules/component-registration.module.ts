// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// List of exports components for registration
import { ComponentRegistrationHelper } from '../helpers/component-registration.helper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
	declarations: [...ComponentRegistrationHelper],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
	exports: [...ComponentRegistrationHelper],
	providers: [],
	bootstrap: [ComponentRegistrationHelper],
})
export class ComponentRegistrationModule {}
