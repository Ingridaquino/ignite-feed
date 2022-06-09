import { format } from 'date-fns'; //Formatar a data
import ptBR from 'date-fns/locale/pt-BR'; //Formatar o idioma

import { Avatar } from "./Avatar";
import { Comment } from './Comment';

import styles from './Post.module.css'

export function Post({author, publishedAt}) {
    //Formatação da data
    // const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    //     locale: ptBR,
    // })


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

                {/* <time title={publishedDateFormatted} dateTime="2022-06-06 08:14:22">
                    
                </time> */}
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{'  '}<a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a> {'  '}
                    <a href="">#nlw </a> {'  '}
                    <a href="">#rocketseat</a> {'  '}
                </p>
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

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}