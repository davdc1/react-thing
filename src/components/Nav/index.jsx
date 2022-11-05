import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = ({ linkArray }) => {
    return (
        <div className='nav-wrapper'>
            <div className='nav-links-container'>
                {linkArray?.map((link, idx) => {
                    return (
                        <NavLink key={idx.toString()} to={link.url}>
                            {link.text}
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Nav