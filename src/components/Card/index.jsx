import Button from "components/Button"
import { Link } from "react-router-dom"
import style from "./post.module.css"

export default function Card({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={style.post}>
                <img
                    className={style.picture}
                    src={`/img/${post.id}/capa.png`}
                    alt="Imagem de capa do artigo"
                />
                <h2 className={style.title}> {post.title} </h2>
                <Button>Ler</Button>
            </div>
        </Link>
    )
}