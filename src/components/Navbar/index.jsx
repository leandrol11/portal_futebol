import NavbarLink from "../NavbarLink"
import style from "./navbar.module.css"

export default function Navbar() {
    return (
        <header>
            <nav className={style.navbar}>
                <NavbarLink to="/" > Início </NavbarLink>
                <NavbarLink to="/sobremim" > Sobre Mim </NavbarLink>
            </nav>
        </header>
    )
}