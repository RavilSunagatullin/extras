import { useState } from 'react'

interface ListGroupProps {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

const ListGroup = (props: ListGroupProps) => {
	const [selectedIndex, setSelectedIndex] = useState(-1)
	return (
		<>
			<h1>{props.heading}</h1>
			<ul className='list-group'>
				{props.items.length ? props.items.map((item, index) =>
						<li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={index}
						    onClick={() => {
							    setSelectedIndex(index)
							    props.onSelectItem(item)
						    }}>{item}</li>) :
					<p>no items</p>}
			</ul>
		</>
	)
}

export default ListGroup