import style from "./regularPost.module.css"

export default function RegularPost({ children, title, photo }) {
    return (
        <article className={style.regularPostContainer} >
            <div
                className={style.photo}
                style={{ backgroundImage: `url(${photo})` }}
            ></div>
            <h2 className={style.title}>
                {title}
            </h2>
            <div className={style.articleContainer}>
                {children}
            </div>
        </article>
    )
}