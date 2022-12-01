// Angular
import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core';
// Models
import ButtonModel from '../../src/store/app/models/button-model';
@Component({
	selector: 'app-root',
	template: `
		<div>
			<div class="slider-wrapper" (click)="buttonEmissionHandler()">
				<h1>The dude abides...</h1>
				<div class="slider">
					<div class="slider-content">
						<div>Clicks...</div>
						<div>Anywhere,</div>
						<div id="that-rug-really-tied-the-room-together">man</div>
					</div>
				</div>
			</div>
			<!-- <button-atom [button_data]="buttonModel" (toggle)="buttonEmissionHandler()"></button-atom> -->
			<overlay-atom [overlay]="overlay">
				<!-- Component ideally placed as the :nth-last-child(2) in the Body element, z-index assists here -->
			</overlay-atom>
			<modal-molecule *ngIf="modal" (toggle)="buttonEmissionHandler()">
				<!-- Component ideally placed as the :nth-last-child(1) in the Body element, z-index assists here -->
			</modal-molecule>
		</div>
	`,
})
export class AppComponent
	implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
	constructor() {}
	// Properties
	title = 'technical';
	buttonModel = ButtonModel;
	overlay = false; // TODO: Move to NGRX
	modal = false; // TODO: Move to NGRX
	// Life cycle hooks
	ngOnInit(): void {}
	ngAfterContentInit(): void {}
	ngAfterContentChecked(): void {}
	ngAfterViewInit(): void {}
	ngAfterViewChecked(): void {}
	ngOnDestroy(): void {}
	// Methods
	buttonEmissionHandler() {
		/**
		 * Description:
		 *
		 * Handler for the button click event
		 *
		 * Work around for lack of NGRX
		 *
		 * // TODO: Pull this when NGRX is implemented
		 *
		 */
		this.setOverlay();
		this.setModal();
	}
	setModal(): void {
		/**
		 * Description:
		 *
		 * Sets modal property either displaying or hiding the modal
		 *
		 * Work around for lack of NGRX
		 *
		 * // TODO: Pull this when NGRX is implemented
		 *
		 */
		this.modal = this.modal ? false : true;
	}
	setOverlay(): void {
		/**
		 * Description:
		 *
		 * Sets overlay property either displaying or hiding the overlay
		 *
		 * Work around for lack of NGRX
		 *
		 * // TODO: Pull this when NGRX is implemented
		 *
		 */
		this.overlay = this.overlay ? false : true;
	}
}
