import { NavLink } from "react-router-dom"

const NavButton = ({ url, text }) => {
    return (
        <NavLink to={url} className="nav-button">
            {text}
        </NavLink>
    )
}

export default NavButton