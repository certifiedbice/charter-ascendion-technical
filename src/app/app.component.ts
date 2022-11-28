// Angular
import {
	Component,
	OnInit,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy,
} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent
	implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
	constructor() {}
	// Properties
	title = 'technical';
	// Life cycle hooks
	ngOnInit(): void {
		console.log('AppComponent');
	}
	ngAfterContentInit(): void {}
	ngAfterContentChecked(): void {}
	ngAfterViewInit(): void {}
	ngAfterViewChecked(): void {}
	ngOnDestroy(): void {}
}
