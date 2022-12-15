// --- Dependencies
import {NavLink} from 'react-router-dom'


// --- Style
import '../../stylesheets/components/_card.scss'

// --- Container
export default function HouseComponent({item}) {
	return (
		<article className="card">
			<NavLink to={`/home/${item.id}`} state={{item}}>
				<div className="card_thumb">
					<img src={item.cover} alt=""/>
				</div>
				<div className="card_content">
					<p>{item.title}</p>
				</div>
			</NavLink>
		</article>
	)
}