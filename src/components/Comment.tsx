import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
    
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    //Para verificar os likes(aplaudir), 0 pois é numerico 
    const [likeCount, setLikeCount] = useState(0);

    //Function de deletar comentarios1
    function handleDeleteComment() {
        //usando a funcao do post e passando o conteudo do comentario
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
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
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}