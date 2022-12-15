// --- Style
import '../stylesheets/screens/_about.scss'

// --- Images
import image from '../assets/images/about.png'

// --- Components
import CollapsibleComponent from '../components/collapsible/CollapsibleComponent'

// --- About
export default function AboutScreen() {
	return (
		<section className="about">
			<div className="center">
				<div className="about_header">
					<div className="about_cover">
						<img src={image} alt=""/>
					</div>
				</div>
				<div className="about_section">
					<CollapsibleComponent title="Fiabilité">
						<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
					</CollapsibleComponent>
					<CollapsibleComponent title="Respect">
						<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
					</CollapsibleComponent>
					<CollapsibleComponent title="Service">
						<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
					</CollapsibleComponent>
					<CollapsibleComponent title="Sécurité">
						<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
					</CollapsibleComponent>
				</div>
			</div>
		</section>
	)
}