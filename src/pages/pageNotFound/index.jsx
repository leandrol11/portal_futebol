import style from "./pageNotFound.module.css"
import error from "assets/erro_404.png"
import Button from "components/Button"
import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
    const navegate = useNavigate()

    return (
        <>
            <div className={style.container}>
                <span className={style.text404}>404</span>

                <h1 className={style.title}>Vish! Página não encontrada.</h1>

                <p className={style.text}> Tem certeza que era isso que você estava procurando?</p>
                <p className={style.text}> Recarregue a página ou volte para a página inicial.</p>

                <div
                    className={style.buttonContainer}
                    onClick={() => {
                        navegate(-1)
                    }}
                >
                    <Button size="lg" > Voltar </Button>
                </div>

                <img classnam={style.image}
                    src={error}
                    alt="Imagem simbólica do erro 404"
                />
            </div>
            <div className={style.space}></div>
        </>
    )
}