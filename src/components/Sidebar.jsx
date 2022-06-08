import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";



export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1654313188737-dc65639ee929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                className={styles.cover}
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/ingridaquino.png" />

                <strong>Ingrid Aquino</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}