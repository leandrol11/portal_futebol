import { NavLink } from "react-router-dom"
import style from "./navbarLink.module.css"

export default function NavbarLink({ children, to }) {
    return (
        <NavLink
            className={({ isActive }) => `
            ${style.link}
            ${isActive ? style.linkDecorated : ""}
            `}
            to={to}
            end >
            {children}
        </NavLink>
    )
}