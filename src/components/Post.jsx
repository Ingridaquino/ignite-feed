import { format,formatDistanceToNow } from 'date-fns'; //Formatar a data
import ptBR from 'date-fns/locale/pt-BR'; //Formatar o idioma
import { useState } from 'react';

import { Avatar } from "./Avatar";
import { Comment } from './Comment';

import styles from './Post.module.css';





export function Post({author, publishedAt, content}) {
    // estado = são variáveis que eu quero que o componente monitore 
    //Array de comentarios
    const [comments, setComments] = useState([
        1,
        2,
    ])

    //Formatação da data
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    //Data atual
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    // //Function de click do form (para add um novo comentario)
    function handleCreateNewComment() {
        event.preventDefault() //Para permanecer na mesma pag depois de add o comentario
        
        //imutabilidade, não passamos somente o valor que queremos (3), passamos os que já temos (1, 2)
        setComments([...comments, comments.length + 1]) // Adicionado o comentario
    }


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                </time>
            </header>

            {/* Percorrer cada posts */}
            <div className={styles.content}>
               {content.map(item => {
                    if(item.type === 'paragraph') {
                        return <p>{item.content}</p>;
                    } else if (item.type === 'link') {
                        return <p><a href='#'>{item.content}</a></p>
                    }
               })}
            </div>

            {/* onSubmit para ouvir o evento de click para deixar um comment */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            {/* Percorre cada comentário */}
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>
        </article>
    )
}