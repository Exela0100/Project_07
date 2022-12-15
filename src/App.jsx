// --- Dependencies
import {useEffect, useState, useContext} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// --- Components
import ContainerComponent from "./components/container/ContainerComponent";

// --- Screens
import IndexScreen from './screens/IndexScreen'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ErrorScreen from './screens/ErrorScreen'

// --- Application
export default function App() {
	return (
		<Router>
			<ContainerComponent>
				<Routes>
					<Route path="/" element={<IndexScreen/>}/>
					<Route path="/about" element={<AboutScreen/>}/>
					<Route path="/home/:id" element={<HomeScreen/>}/>
					<Route path="*" element={<ErrorScreen/>}/>
				</Routes>
			</ContainerComponent>
		</Router>
	)
}