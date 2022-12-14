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
import * as models from '../../../src/store/app/models/button-model';
// Interfaces
import ModalModelInterface from '../../interfaces/modal-model.interface';
// Icons
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'modal-molecule',
	template: `
		<div (click)="clickHandler($event)" id="{{ model.id }}" class="modal-wrapper">
			<div id="modal-flex-aligner">
				<div class="aligner-item first-aligner"></div>
				<div class="aligner-item modal-content">
					<div class="modal-header">
						<div class="icon modal-close-icon-wrapper">
							<fa-icon
								[icon]="faCircleXmark"
								(click)="clickHandler($event)"
								class="modal-close-icon"></fa-icon>
						</div>
						<div class="modal-title">{{ model.title }}</div>
						<hr />
					</div>
					<div class="modal-body">{{ model.body }}</div>
					<div class="modal-actions">
						<hr />
						<div class="modal-actions-float-wrapper">
							<!-- The actions array order will dictate the display order of buttons -->
							<ng-template ngFor [ngForOf]="model.actions" let-input>
								<button-atom
									[button_data]="buttonModelSelector(input)"
									(click)="buttonsClickHandler($event)"></button-atom>
							</ng-template>
						</div>
					</div>
				</div>
				<div class="aligner-item last-aligner"></div>
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
	cancelButtonModel = models.CancelButtonModel;
	submitButtonModel = models.SubmitButtonModel;
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
	buttonModelSelector(type: string) {
		/**
		 * Selects the model for the button atom
		 */
		if (type === 'cancel') {
			return this.cancelButtonModel;
		} else if (type === 'submit') {
			return this.submitButtonModel;
		} else {
			return {};
		}
	}
	buttonsClickHandler(e: object): void {
		/**
		 * Click handler for model loaded buttons
		 */
		console.log('modal button click');
	}
	clickHandler(e: any): void {
		/**
		 * Description:
		 *
		 * Emits no actual value since toggle requires none
		 *
		 * Toggling handles 3 elements:
		 *
		 * aligner-item(first/last)
		 * modal-wrapper
		 * fa-icon - this bugger requires more code due to nested elements
		 * generated by the FontAwesome component.
		 *
		 * Either element click will terminate the modal and overlay
		 *
		 * modalKillers is an array of classes and nodeNames
		 *
		 * when click originates from the FontAwesome icon:
		 *
		 * Compare the nodeName against the modalKillers,
		 *
		 * If grandparent wrapper element classList:
		 *
		 * Emit the toggle
		 *
		 * if classes:
		 *
		 * Check classList against modalKillers,
		 *
		 * if true, emit
		 */
		if (
			e.target.classList.contains('button') ||
			e.target.parentNode.classList.contains('aligner-item') ||
			e.target.parentNode.parentNode.classList.contains('aligner-item')
		) {
			/**
			 * Fix for a button/element click on the modal-wrapper/elements/buttons closing modal
			 * // TODO: Correct and better it ;)
			 */
			return;
		}
		const modalKillers = [
			'first-aligner',
			'last-aligner',
			'modal-wrapper',
			'modal-close-icon',
			'ng-fa-icon modal-close-icon',
			'path',
			'svg',
			'svg-inline--fa fa-circle-xmark',
		];
		const pathDOMNodeNthParentNodeClassList = modalKillers.includes(e.target.nodeName)
			? e.target.parentNode.parentNode.classList
			: false;
		const classes = e.target.classList ? e.target.classList : false;
		let classesCheck = false;
		if (classes) {
			classes.forEach((className: string) => {
				const modalWrapper = document.getElementsByClassName('modal-wrapper')[0];
				modalWrapper.classList.add('modal-fade-out');
				classesCheck = modalKillers.includes(className) ? true : false;
			});
		}
		setTimeout(() => {
			if (pathDOMNodeNthParentNodeClassList || classesCheck) {
				this.toggle.emit();
			}
		}, 150);
	}
}
