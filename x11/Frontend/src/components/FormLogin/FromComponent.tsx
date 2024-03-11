import { Button, TextField } from '@mui/material'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import loginUser from '../../api'
import Style from './style.module.css'


const FromComponent = () => {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	function handleSubmit(event:FormEvent<HTMLFormElement>) {
		event.preventDefault()
		loginUser(email, password).then(data => console.log(data))
	}
	
	return (
		<div className={Style['container']}>
			<form autoComplete='off' onSubmit={handleSubmit}>
				<TextField
					label='Email'
					onChange={e => setEmail(e.target.value)}
					required
					variant='outlined'
					color='primary'
					type='email'
					sx={{ mb: 3 }}
					fullWidth
				/>
				<TextField
					label='Password'
					onChange={e => setPassword(e.target.value)}
					required
					variant='outlined'
					color='primary'
					type='password'
					fullWidth
					sx={{ mb: 3 }}
				/>
				<Button variant='outlined' color='primary' type='submit'>Войти</Button>
			
			</form>
			<small>Нету аккаунта? <Link to='/register'>Зарегистрируйтесь</Link></small>
		</div>
	)
}

export default FromComponent