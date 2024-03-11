import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { privateRoutes, publicRoutes, RouteNames } from '../routes'

const AppRouter = () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	const {isAuth} = useTypedSelector(state => state.authReducer)
	const auth = false
	const navigate = useNavigate()
	
	useEffect(() => {
		if (!auth) {
			navigate(RouteNames.LOGIN)
		} else {
			navigate(RouteNames.EVENT)
		}
	}, [auth, navigate])
	
	return (
		<Routes>
			{isAuth ? (
				privateRoutes.map(route => (
					<Route
						path={route.path}
						key={route.path}
						element={<route.component />}
					/>
				))
			) : (
				publicRoutes.map(route => (
					<Route
						path={route.path}
						key={route.path}
						element={<route.component />}
					/>
				))
			)}
		</Routes>
	)
}

export default AppRouter
