// --- Style
import '../stylesheets/screens/_index.scss'

// --- Data
import data from '../data/housing.json'

// --- Components
import HouseComponent from "../components/house/HouseComponent";

// --- Index
export default function IndexScreen() {
	return (
		<section className="index">
			<div className="center">
				<div className="index_header">
					<div className="index_cover">
						<p>Chez vous, partout et ailleurs</p>
					</div>
				</div>
				<div className="index_section">
					<div className="index_housing">
						{data.map(item => (
							<HouseComponent item={item} key={item.id}/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}