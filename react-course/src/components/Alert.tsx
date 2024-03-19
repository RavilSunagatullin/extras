import { ReactNode } from 'react'

interface AlertProps {
	children:ReactNode
}
const Alert = (props:AlertProps) => {
	return (
		<div className="alert alert-primary" role="alert">
			{props.children}
		</div>
	)
}

export default Alert