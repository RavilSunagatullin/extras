import { Helmet } from 'react-helmet'
import HeaderComponent from '../components/Header/Header.component.tsx'

function AddEditCardPage() {
	return (
		<div>
			<Helmet title='Edit bank card'/>
			<HeaderComponent/>
			<h1>Edit Card Page</h1>
		</div>
	);
}
export default AddEditCardPage;