import React from 'react'
import LoginPage from '../pages/loginPage.tsx'
import NotFoundPage from '../pages/notFoundPage.tsx'
import RegisterPage from '../pages/registerPage'
import IndexPage from '../pages/indexPage'
import CreateCardPage from '../pages/createCardPage'
import UpdateCardPage from '../pages/updateCardPage'

interface RouteConfig {
	path:string,
	component: React.ComponentType<any>;
}
/**
 * Определение маршрутов приложения.
 */
const routes: RouteConfig[] = [
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/register',
		component: RegisterPage,
	},
	{
		path: '/',
		component: IndexPage,
	},
	{
		path: '/create-card',
		component: CreateCardPage,
	},
	{
		path: '/update-card',
		component: UpdateCardPage,
	},
	{
		path: '*',
		component: NotFoundPage
	}
];

export default routes;
