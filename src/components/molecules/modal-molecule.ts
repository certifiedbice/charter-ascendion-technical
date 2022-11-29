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

@Component({
	selector: 'modal-molecule',
	template: `
		<div id="{{ model.id }}" class="modal-wrapper">
			<div id="aligner">
				<div class="aligner-item"></div>
				<div class="modal-content aligner-item">
					<div id="modal-container">
						<div><!-- icon top right corner --></div>
						<div>{{ model.title }}</div>
						<div>{{ model.body }}</div>
						<div>
							<!-- actions -->
							<!-- <button type="{{ type }}" id="{{ id }}" class="{{ class }}" name="{{ name }}" (click)="clickHandler()"> -->
							<!-- {{ value }} -->
							<!-- </button> -->
						</div>
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
	// Life cycle hooks
	ngOnInit(): void {}
	ngAfterContentInit(): void {}
	ngAfterContentChecked(): void {}
	ngAfterViewInit(): void {}
	ngAfterViewChecked(): void {}
	ngOnDestroy(): void {}
	// Methods
}
