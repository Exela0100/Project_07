// --- Dependencies
import {useState} from 'react'

// --- Style
import '../../stylesheets/components/_collapsible.scss'

// --- Components
export default function CollapsibleComponent({title, children}) {
	// --- State
	const [open, setOpen] = useState(false)

	return (
		<div className={`collapsible ${open ? 'collapsible_open' : ''}`}>
			<button onClick={() => setOpen(!open)}>{title}{open ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</button>
			{open && <div className="collapsible_more">{children}</div>}
		</div>
	)
}