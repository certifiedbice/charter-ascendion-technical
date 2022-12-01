const ModalModel = {
	/**
	 * Purpose:
	 *
	 * Model for defining an modal's parameters.
	 *
	 * For demonstration purposes, the actions or
	 * buttons will be a simple array of strings but
	 * ultimately could be considered an array of objects
	 * for mucho configuracion.
	 *
	 * Another note, the "external model" file could be
	 * included within the component itself so as to promote
	 * a SOLID component but in my demo I have also included
	 * the option to implement this component within an NGRX
	 * store as well, leaving several options for implementation.
	 */
	actions: ['submit', 'cancel'],
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	classList: ['modal'],
	id: 'modal01',
	title: 'Test Modal 01',
};

export default ModalModel;
