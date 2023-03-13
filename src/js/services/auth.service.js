import axios from "axios"
import API_ENV from "../config/api.config";

/**
 *	function login. make login request to API
 * @param {string} email
 * @param {String} password
 * @returns {Promise<void>}
 */
export async function login(email, password)
{
	try{
		const response = await axios.post(`${API_ENV.apiUrl}/auth/login`, JSON.stringify({email, password}),{
			headers: {
				"content-type": "aplicatoion/json"
			}
		})
		console.log(response);
		return response.data;
	}
	catch(err){
		console.log(err);
		return Promise.reject(err);
	}
}
