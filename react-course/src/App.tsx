import Alert from './components/Alert.tsx'
import ListGroup from './components/ListGroup.tsx'

const App = () => {
	const handleOnSelectItem = (item:string)=> {
		console.log(item)
	}
	return (
		<div>
			<Alert>
				<ListGroup items={['item', 'item', 'item']} heading='list' onSelectItem={handleOnSelectItem}/>
			</Alert>
			
		</div>
	)
}

export default App