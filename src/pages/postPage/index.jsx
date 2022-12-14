import { useParams } from "react-router-dom"
import posts from "postsData/posts"
import RegularPost from "components/RegularPost"
import "./post.css"
import PageNotFound from "pages/pageNotFound"
import Recomendations from "components/Recomendations"

export default function Post() {
    const params = useParams()

    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return (
            <PageNotFound />
        )
    }

    const recomendation = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <>
            <RegularPost
                photo={`/img/${post.id}/capa.png`}
                title={post.title}
            >
                <div className="text-container">
                    <p> {post.text} </p>
                </div>

                <Recomendations recomendation={recomendation} />
            </RegularPost>
        </>
    )
}