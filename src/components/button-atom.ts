// Angular
import {
	Component,
	Input,
	OnInit,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy,
} from '@angular/core';

@Component({
	selector: 'button-atom',
	template: `
		<div>
			<button type="{{ type }}" id="{{ id }}" class="{{ class }}" name="{{ name }}">
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

	type: string;
	id: string;
	class: string;
	name: string;
	value: string;

	// Life cycle hooks
	ngOnInit() {
		this.setButtonVariables();
	}
	ngAfterContentInit() {}
	ngAfterContentChecked() {}
	ngAfterViewInit() {}
	ngAfterViewChecked() {}
	ngOnDestroy() {}

	// Methods
	setButtonVariables = () => {
		/**
		 * Description:
		 *
		 * Updates class properties from props
		 *
		 */
		this.type = this.button_data.type;
		this.id = this.button_data.id;
		this.class = this.button_data.class;
		this.name = this.button_data.name;
		this.value = this.button_data.value;
	};
}
