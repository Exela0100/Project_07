// --- Dependencies
import {useState, Children, cloneElement} from 'react'

// --- Style
import '../../stylesheets/components/_carousel.scss'

// --- Item
export const ItemCarousel = ({children}) => {
	return(
		<div className="carousel_item">
			{children}
		</div>
	)
}


// --- Carousel
const CarouselComponent = ({children}) => {
	// --- State
	const [current, setCurrent] = useState(0)

	// --- Update current
	const updateIndex = (index) => {
		// --- Check index
		if(index < 0) {
			// --- First index
			index = Children.count(children) - 1
		}else if(index >= Children.count(children)) {
			// --- Next index
			index = 0
		}

		// --- Set new index
		setCurrent(index)
	}

	return(
		<div className="carousel">
			<div className="carousel_items" style={{transform:`translateX(-${current*100}%)`}}>
				{Children.map(children, (child, index) => {
					return cloneElement(child)
				})}
			</div>
			<div className="carousel_indicator">
				<button onClick={() => updateIndex(current - 1)}>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button onClick={() => updateIndex(current + 1)}>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</div>
	)
}

export default CarouselComponent