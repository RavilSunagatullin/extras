import { Helmet } from 'react-helmet';

interface HelmetProps{
	title: string,
}
export default function HelmetComponent(props:HelmetProps) {
	return (
		<div>
			<Helmet>
				<title>{props.title}</title>
				<meta name="description" content="Описание страницы" />
			</Helmet>
		</div>
	);
}
