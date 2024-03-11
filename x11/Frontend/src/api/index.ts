import axios from 'axios';
import endpoints from './config.ts'
export default async function loginUser(email: string, password: string) {
	try {
		const response = await axios.post(endpoints.login, { email, password });
		return response.data;
	} catch (error) {
		console.error('Ошибка при входе:', error);
		return null;
	}
}