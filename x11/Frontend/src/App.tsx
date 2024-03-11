import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import routes from './routes/index.ts'

function App() {
	
	return (
		<Router>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Routes>
		</Router>
	)
}

export default App
