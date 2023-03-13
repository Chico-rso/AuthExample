import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import ui from "./config/ui.config";

import {validate} from "./helpers/validate";
import {showInputError, hideInputError} from "./views/form";
import {login} from './services/auth.service'


const { form, inputMail, inputPassword } = ui;
const inputs = [inputMail, inputPassword];

//events
form.addEventListener('submit', (e) =>{
	e.preventDefault();
	onSubmit();
});

inputs.forEach((el) =>
{
	el.addEventListener('focus', () =>
	{
		hideInputError(el);
	})
})

//hendlers
async function onSubmit()
{
	const isValidForm = inputs.every((el) =>
	{
		if(!isValidForm)
		{
			showInputError(el)
		}
		return validate(el);
	});
	if(!isValidForm)return;
	try
	{
		await login(inputEmail.value, inputPassword.value)
	}
	catch (err)
	{
	
	}
}

