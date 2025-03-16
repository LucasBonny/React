import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';


export function Post({author, content, publishedAt}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar image={author.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='11 de Maio às 08:36h' dateTime={"2025-05-11 08:36:22"}>{publishedAt.toString()}</time>
            </header>

            <div className={styles.content}>
                {content.map((type, content) => {
                    if(type === 'paragraph') {
                        return <p>{content}</p>
                    } else if(type === 'link') {
                        return <a href={content}>{content}</a>
                    }
                })}
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