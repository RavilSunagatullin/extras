import { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/Header/Header.component.tsx'

function NotFoundPage() {
	const navigate = useNavigate();
	
	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 2000); // Редирект будет выполнен через 2 секунды
	}, [navigate]);
	
	return (
		<div>
			<Helmet title='not found'/>
			<HeaderComponent/>
			<h1>404 - Page Not Found</h1>
			<p>Redirecting to home page...</p>
		</div>
	);
}

export default NotFoundPage;
