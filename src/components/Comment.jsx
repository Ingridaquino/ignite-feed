import { Avatar } from "./Avatar";

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment({ content, deleteComment }) {

    //Function de deletar comentarios1
    function handleDeleteComment() {
        console.log('Deletado')


        //usando a funcao do post e passando o conteudo do comentario
        deleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ingridaquino.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ingrid Aquino</strong>
                            <time title="11 de Maio ás 08h50" dateTime="2022-05-11 08:50:34">
                                Cerca de 1 ano atrás
                            </time>
                        </div>
                        
                        {/* Add evento de deletar */}
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}