import { format,formatDistanceToNow } from 'date-fns'; //Formatar a data
import ptBR from 'date-fns/locale/pt-BR'; //Formatar o idioma

import { Avatar } from "./Avatar";
import { Comment } from './Comment';

import styles from './Post.module.css';


//Array de comentarios
const comments = [
    1,
    2,
    3,
];

export function Post({author, publishedAt, content}) {
    //Formatação da data
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    //Data atual
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


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

            <form className={styles.commentForm}>
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