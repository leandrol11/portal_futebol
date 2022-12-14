import style from "./footer.module.css"
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <MarcaRegistrada />
            Made by Leandro Maciel
        </footer>
    )
}