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
import ModalModel from '../../../src/store/app/models/modal-model';
// Interfaces
import ModalModelInterface from '../../interfaces/modal-model.interface';
// Icons
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'modal-molecule',
	template: `
		<div id="{{ model.id }}" class="modal-wrapper">
			<div id="modal-flex-aligner">
				<div class="aligner-item"></div>
				<div class="aligner-item modal-content">
					<div class="modal-header">
						<div class="icon modal-close-icon-wrapper">
							<fa-icon [icon]="faCircleXmark" (click)="clickHandler()" class="modal-close-icon"></fa-icon>
						</div>
						<div class="modal-title">{{ model.title }}</div>
						<hr />
					</div>
					<div>{{ model.body }}</div>
					<div>
						<!-- actions will be an array of buttons, the array will dictate the order of the buttons-->
						<!-- actions -->
						<!-- <button type="{{ type }}" id="{{ id }}" class="{{ class }}" name="{{ name }}" (click)="clickHandler()"> -->
						<!-- {{ value }} -->
						<!-- </button> -->
					</div>
				</div>
				<div class="aligner-item"></div>
			</div>
		</div>
	`,
})
export class ModalMolecule
	implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
	constructor() {}
	// Properties
	@Output() toggle: EventEmitter<void> = new EventEmitter();
	model: ModalModelInterface = ModalModel;
	actions: Array<string> = this.model.actions;
	body: string = this.model.body;
	classList: Array<string> = this.model.classList;
	id: string = this.model.id;
	title: string = this.model.title;
	faCircleXmark = faCircleXmark;
	// Life cycle hooks
	ngOnInit(): void {}
	ngAfterContentInit(): void {}
	ngAfterContentChecked(): void {}
	ngAfterViewInit(): void {}
	ngAfterViewChecked(): void {}
	ngOnDestroy(): void {}
	// Methods
	clickHandler(): void {
		/**
		 * Description:
		 *
		 * Emits no actual value since toggle requires none
		 *
		 */
		this.toggle.emit();
	}
}
