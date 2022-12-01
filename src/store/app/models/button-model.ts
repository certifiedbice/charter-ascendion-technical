const ButtonModel = {
	/**
	 * Purpose:
	 *
	 * Model for defining a button's parameters.
	 */
	type: 'submit',
	id: 'modal-toggle-btn',
	classList: ['button'],
	name: 'modal-toggle-btn',
	value: 'The dude abides button clicks',
};
const CancelButtonModel = {
	/**
	 * Purpose:
	 *
	 * Model for defining a button's parameters.
	 */
	type: '',
	id: 'modal-cancel-btn',
	classList: ['button'],
	name: 'modal-cancel-btn',
	value: 'Cancel',
};
const SubmitButtonModel = {
	/**
	 * Purpose:
	 *
	 * Model for defining a button's parameters.
	 */
	type: 'submit',
	id: 'modal-submit-btn',
	classList: ['button'],
	name: 'modal-submit-btn',
	value: 'Submit',
};

export { ButtonModel, CancelButtonModel, SubmitButtonModel };
