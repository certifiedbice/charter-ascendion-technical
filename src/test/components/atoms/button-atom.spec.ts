import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAtom } from '../../../components/button-atom';

describe('ButtonAtom', () => {
	let component: ButtonAtom;
	let fixture: ComponentFixture<ButtonAtom>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ButtonAtom],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonAtom);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
