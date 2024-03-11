import { Layout, Menu, Row } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { RouteNames } from '../routes'

const Navbar: FC = () => {
	const navigate = useNavigate()
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	const {isAuth} = useTypedSelector(state => state.authReducer)
	return (
		<Layout.Header>
			<Row justify='end'>
				{isAuth ?
					<Menu theme='dark' mode='horizontal' selectable={false}>
						<div style={{color:'white'}}>fddgh</div>
						<Menu.Item key='event' onClick={() => navigate(RouteNames.EVENT)}>Event</Menu.Item>
					</Menu>
					:
					<Menu theme='dark' mode='horizontal' selectable={false}>
						<div style={{color:'white'}}>calenadr</div>
						<Menu.Item key='login' onClick={() => navigate(RouteNames.LOGIN)}>Login</Menu.Item>
					</Menu>}
			</Row>
		</Layout.Header>
	)
}

export default Navbar