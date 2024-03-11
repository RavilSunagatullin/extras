import { Helmet } from 'react-helmet'
import HeaderComponent from '../components/Header/Header.component.tsx'

function LoginRegisterPage() {
	return (
		<div>
			<Helmet title='register'/>
			<HeaderComponent/>
			<h1>Register Page</h1>
		</div>
	);
}

export default LoginRegisterPage;
