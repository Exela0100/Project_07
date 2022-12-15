// --- Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'

// --- Styles
import './stylesheets/stylesheets.scss'

// --- Application
import App from './App'

// --- Dom
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)