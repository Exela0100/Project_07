// --- Dependencies
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router'

// --- Style
import '../stylesheets/screens/_error.scss'

// --- Error
export default function ErrorScreen() {
	// --- State
	const navigate = useNavigate()

	return (
		<section className="error">
			<p>404</p>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<NavLink to="/">Retourner sur la page d’accueil</NavLink>
		</section>
	)
}