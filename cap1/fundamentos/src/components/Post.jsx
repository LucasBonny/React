import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/123037864?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Bonny</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Maio às 08:36h' dateTime="2025-05-11 08:36:22">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=''>👉 LucasBonny/React</a></p>

                <p>
                    <a href="">#novoprojeto</a> <a href="">#react</a> <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>                
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                <Comment />
            </div>

        </article>
        
    );
}