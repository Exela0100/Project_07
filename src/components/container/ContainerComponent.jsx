// --- Dependencies
import {NavLink} from 'react-router-dom'

// --- Style
import '../../stylesheets/components/_container.scss'

// --- Images
import logo from '../../assets/images/logo.svg'
import logo_light from '../../assets/images/logo_light.svg'

// --- Container
export default function ContainerComponent({children}) {
	return (
		<div className="container">
			<header>
				<div className="center">
					<div className="header_logo">
						<img src={logo} alt="" />
					</div>
					<div className="header_menu">
						<nav>
							<ul>
								<li>
									<NavLink to="/">Accueil</NavLink>
								</li>
								<li>
									<NavLink to="/about">A propos</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main>{children}</main>
			<footer>
				<div className="center">
					<div className="footer_logo">
						<img src={logo_light} alt="" />
					</div>
					<div className="footer_copy">
						<p>© 2020 Kasa. All rights reserved</p>
					</div>
				</div>

			</footer>
		</div>
	)
}