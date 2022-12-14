import style from "./home.module.css"
import posts from "postsData/posts.js"
import Card from "components/Card"

export default function HomeList() {
    return (
        <ul className={style.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Card post={post} />
                </li>
            )
            )}
        </ul>
    )
}