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
@Component({
	selector: 'button-atom',
	template: `
		<div>
			<button type="{{ type }}" id="{{ id }}" class="{{ classList }}" name="{{ name }}" (click)="clickHandler()">
				{{ value }}
			</button>
		</div>
	`,
})
export class ButtonAtom
	implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
	constructor() {}
	// Properties
	@Input()
	get button_data(): any {
		return this._button_data;
	}
	set button_data(button_data: any) {
		this._button_data = button_data;
	}
	private _button_data = '';
	@Output() toggle: EventEmitter<void> = new EventEmitter();
	type!: string;
	id!: string;
	classList!: Array<string>;
	name!: string;
	value!: string;
	// Life cycle hooks
	ngOnInit(): void {
		this.setButtonVariables();
	}
	ngAfterContentInit(): void {}
	ngAfterContentChecked(): void {}
	ngAfterViewInit(): void {}
	ngAfterViewChecked(): void {}
	ngOnDestroy(): void {}
	// Methods
	setButtonVariables(): void {
		/**
		 * Description:
		 *
		 * Updates class properties from props
		 *
		 */
		this.type = this.button_data.type;
		this.id = this.button_data.id;
		this.classList = this.button_data.classList.join(' ');
		this.name = this.button_data.name;
		this.value = this.button_data.value;
	}
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
