// Angular
import {
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
// Model
import OverlayModel from '../../../src/store/app/models/overlay-model';
@Component({
	selector: 'modal-molecule',
	template: `
		<div>
			<!-- <button type="{{ type }}" id="{{ id }}" class="{{ class }}" name="{{ name }}" (click)="clickHandler()">
				{{ value }}
			</button> -->works
		</div>
	`,
})
export class ModalMolecule
	implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
	constructor() {}
	// Properties
	@Output() toggle: EventEmitter<void> = new EventEmitter();

	// Life cycle hooks
	ngOnInit(): void {
		this.toggle.emit();
	}
	ngAfterContentInit(): void {}
	ngAfterContentChecked(): void {}
	ngAfterViewInit(): void {}
	ngAfterViewChecked(): void {}
	ngOnDestroy(): void {}
	// Methods
}
