export const UPDATE_FORM = 'UPDATE_FORM';

export const handleInputChange = (name, value, dispatch, formState) => {
	const { hasError, error } = validateInput(name, value);

	let isFormValid = true;

	for (const key in formState) {
		const item = formState[key];
		if (key === name && hasError) {
			isFormValid = false;
			break;
		} else if (key !== name && item.hasError) {
			isFormValid = false;
			break;
		}
	}

	dispatch({
		type: UPDATE_FORM,
		data: {
			name,
			value,
			hasError,
			error,
			touched: false,
			isFormValid,
		},
	});
};

export const handleOnBlur = (name, value, dispatch, formState) => {
	const { hasError, error } = validateInput(name, value);

	let isFormValid = true;

	for (const key in formState) {
		const item = formState[key];
		if (key === name && hasError) {
			isFormValid = false;
			break;
		} else if (key !== name && item.hasError) {
			isFormValid = false;
			break;
		}
	}

	dispatch({
		type: UPDATE_FORM,
		data: {
			name,
			value,
			hasError,
			error,
			touched: true,
			isFormValid,
		},
	});
};

export const inputValidate = (name, value) => {
	let hasError = false;
	let error = '';

	switch (name) {
		case 'hubName':
			if ((value, trim() === '')) {
				hasError = true;
				error = 'hub name cannot be empty';
			} else if (value.length > 50) {
				hasError = true;
				error = 'maximal length 50';
			} else {
				let hasError = false;
				let error = '';
			}
			break;
		case 'hubWeight':
			break;

		case 'spokeHoleDiameter':
			break;

		case 'leftFlangeDiameter':
			break;
		case 'rightFlangeDiameter':
			break;
		case 'leftFlangeToCenter':
			break;
		case 'rightFlangeToCenter':
			break;

		default:
			break;
	}
};
