// --- Dependencies
import {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router'

// --- Style
import '../stylesheets/screens/_house.scss'

// --- Components
import CarouselComponent, {ItemCarousel} from '../components/carousel/CarouselComponent'
import CollapsibleComponent from '../components/collapsible/CollapsibleComponent'
import TagComponent from '../components/tag/TagComponent'

// --- Home
export default function HomeScreen() {
	// --- State
	const {state} = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if(state === null) {
			navigate('/error')
		}
	}, [])

	return (
		<section className="house">
			<div className="center">
				<div className="house_header">
					<CarouselComponent>
						{state?.item.pictures.map((thumb, index) => <ItemCarousel key={index}><img src={thumb} alt=""/></ItemCarousel>)}
					</CarouselComponent>
				</div>
				<div className="house_section">
					<div className="house_head">
						<div className="house_title">
							<h2>{state?.item.title}</h2>
							<p>{state?.item.location}</p>
						</div>
						<div className="house_host">
							<p>{state?.item.host.name.split(' ')[0]}<span>{state?.item.host.name.split(' ')[1]}</span></p>
							<img src={state?.item.host.picture} alt=""/>
						</div>
						<div className="house_tags">
							{state?.item.tags.map((tag, index) => <TagComponent key={index} tag={tag}/>)}
						</div>
						<div className="house_rating" data-rating={state?.item.rating}>
							{
								[...Array(5)].map((e,i) => <i className={`fa-solid fa-star ${i <= state?.item.rating-1 ? 'house_check' : ''}`} key={i}/>)
							}
						</div>
					</div>
					<div className="house_info">
						<CollapsibleComponent title="Description">
							<p>{state?.item.description}</p>
						</CollapsibleComponent>
						<CollapsibleComponent title="Équipements">
							{state?.item.equipments.map((data, i) => <p key={i}>{data}</p>)}
						</CollapsibleComponent>
					</div>
				</div>
			</div>
		</section>
	)
}