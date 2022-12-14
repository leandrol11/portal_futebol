import RegularPost from "components/RegularPost"
import photo from "assets/sobre_mim_capa.png"
import style from "./aboutMe.module.css"
import photoAboutMe from "assets/foto_minha_sobre_mim.png"

export default function AboutMe() {
    return (
        <RegularPost
            photo={photo}
            title="Sobre mim"
        >
            <h3 className={style.subtitle}>
                Prazer, sou o Leandro!
            </h3>
            <img
                src={photoAboutMe}
                alt="Foto do Leandro"
                className={style.photoAboutMe}
            />
            <p className={style.text}>
                Estudo economia na UFMG desde 2019 e comecei a estudar programação
                no final de 2021. Desde então, venho fazendo cursos em paralelo
                com a faculdade e pretendo atuar como desenvolvedor front-end.
            </p>
            <br />
            <p className={style.text}>
                Já fiz um curso de desenvolvimento web, onde aprendi HTML, CSS e
                JavaScript, e um curso de Node.js, ambos na Udemy. Ao concluir estes
                cursos comecei a estudar React na Alura.
            </p>
        </RegularPost>
    )
}