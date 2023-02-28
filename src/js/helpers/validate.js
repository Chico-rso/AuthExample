const regExpDic =
{
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
}

/**
 * Function validate form
 * @param {HTMLInputElement} el
 * @returns {boolean} - some value
 */
export function validate(el)
{
	const regExpName = el.dataset.required;
	
	if(!regExpDic[regExpName]) return true;
	
	return  regExpDic[regExpName].test(el.value);
}
