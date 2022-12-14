import style from "./banner.module.css"
import ball from "assets/bola.png"
import myPhoto from "assets/foto_minha.png"

export default function Banner() {
    return (
        <div className={style.banner}>
            <div>
                <h1 className={style.title}>Bem vindos!</h1>
                <p className={style.text}>
                    Este é o Portal do Futebol, onde temos diversos artigos sobre
                    campanhas históricas de grandes times de futebol.
                </p>
            </div>
            <div className={style.images}>
                <img
                    className={style.ball}
                    src={ball}
                    alt="Bola de futebol"
                    aria-hidden={true}
                />
                <img
                    className={style.myPhoto}
                    src={myPhoto}
                    alt="Foto do Leandro"
                />
            </div>
        </div>
    )
}