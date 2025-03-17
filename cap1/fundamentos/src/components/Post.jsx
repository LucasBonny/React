import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState([
        {id: 1, comment: 'Post dahora em!'},
        {id: 2, comment: 'Post dahora em!'},
    ]);

    
    const date = new Date(publishedAt);
    const published = format(new Date(publishedAt), "dd 'de' MMMM 'às' HH:mm'h'", {locale: ptBR});
    const timeDistance = formatDistanceToNow(
        new Date(publishedAt), { 
            locale: ptBR, 
            addSuffix: true
        });
        
        function handleCreateNewComment() {
            event.preventDefault();
            const newCommentText = event.target.comment.value;
        setComments([...comments, {id: (comments.length + 1), comment: newCommentText}]);
        event.target.comment.value = '';
    }
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
                <time title={published} dateTime={date.toISOString()}>{timeDistance}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    switch (line.type) {
                        case 'paragraph':
                            return <p>{line.content}</p>;
                        case 'link':
                            return <p><a href='#'>{line.content}</a></p>;
                        default:
                            return null;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder="Deixe um comentário"
                />
                <footer>                
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                {comments.map(content => {
                    return <Comment content={content.comment} />;
                })}
            </div>

        </article>
        
    );
}