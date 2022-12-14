import style from "./button.module.css"

export default function Button({ children, size }) {
    return (
        <button
            className={`
            ${style.btn}
            ${style[size]}
            `}
        >
            {children}
        </button>
    )
}