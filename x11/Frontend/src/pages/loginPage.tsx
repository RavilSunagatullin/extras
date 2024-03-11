import { Helmet } from 'react-helmet'
import FromComponent from '../components/FormLogin/FromComponent.tsx'
import HeaderComponent from '../components/Header/Header.component.tsx'

function LoginRegisterPage() {
	return (
		<div>
			<Helmet title='login'/>
			<HeaderComponent/>
			<FromComponent/>
		</div>
	);
}

export default LoginRegisterPage;
