import style from "./recomendations.module.css"
import Card from "components/Card"

export default function Recomendations({ recomendation }) {
    return (
        <section className={style.container}>
            <h2 className={style.title}> Outros posts que você pode gostar: </h2>

            <ul className={style.list}>
                {recomendation.map((post) => (
                    <li key={post.id}>
                        <Card post={post} />
                    </li>
                ))}
            </ul>
        </section>
    )
}