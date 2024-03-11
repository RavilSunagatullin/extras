import { FC} from 'react'
import { Figure } from '../models/figures/Figure.ts'

interface LostFigureProps {
	title: String;
	figures: Figure[];
}

const LostFigures: FC<LostFigureProps> = ({ title, figures }) => {
	return (
		<div className='lost'>
			<h3>{title}</h3>
			{figures.map((figure) =>
				<div key={figure.id}>
					{figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt={figure.name} />}
				</div>
			)}
		</div>
	)
}
export default LostFigures
