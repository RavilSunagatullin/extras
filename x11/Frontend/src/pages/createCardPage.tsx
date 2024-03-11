import { Helmet } from 'react-helmet'
import HeaderComponent from '../components/Header/Header.component.tsx'

function AddEditCardPage() {
	return (
		<div>
			<Helmet title='create bank card'/>
			<HeaderComponent/>
			<h1>Add Card Page</h1>
		</div>
	);
}

export default AddEditCardPage;