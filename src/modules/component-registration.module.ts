// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// List of exports components for registration
import { ComponentRegistrationHelper } from '../helpers/component-registration.helper';

@NgModule({
	declarations: [...ComponentRegistrationHelper],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [...ComponentRegistrationHelper],
	providers: [],
	bootstrap: [ComponentRegistrationHelper],
})
export class ComponentRegistrationModule {}
