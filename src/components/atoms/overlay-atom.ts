// Angular
import {
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	Component,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
} from '@angular/core';
import * as _ from 'lodash';
// Model
import OverlayModel from '../../../src/store/app/models/overlay-model';
@Component({
	selector: 'overlay-atom',
	template: `
		<div
			[ngClass]="display ? 'overlay-visible' : 'overlay-hidden'"
			class="{{ getOverlayClassList() }}"
			id="overlay"></div>
	`,
})
export class OverlayAtom
	implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges, OnDestroy, OnInit
{
	constructor() {}
	// Properties
	@Input()
	get overlay(): any {
		return this._overlay;
	}
	set overlay(overlay: any) {
		this._overlay = overlay;
	}
	private _overlay = '';
	display = false;
	classList: Array<string> = OverlayModel.classList;
	// Life cycle hooks
	ngOnChanges(): void {
		this.setOverlayDisplay();
	}
	ngOnInit(): void {}
	ngAfterContentInit(): void {}
	ngAfterContentChecked(): void {}
	ngAfterViewInit(): void {}
	ngAfterViewChecked(): void {}
	ngOnDestroy(): void {}
	// // Methods
	getOverlayClassList(): string {
		/**
		 * Description:
		 *
		 * Returns a string from the model classList
		 *
		 */
		return this.classList.join(' ');
	}
	setOverlayDisplay(): void {
		this.display = this.overlay;
	}
}
