import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} image="https://avatars.githubusercontent.com/u/7559318?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Montano</strong>
                            <time title='11 de Maio às 08:36h' dateTime="2025-05-11 08:36:22">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'><Trash size={24} /></button>
                    </header>
                    <p>Muito bom Lucas, parabéns!! 👏👏</p>
                </div>

                <footer>
                   <button>
                    <ThumbsUp /> 
                        Aplaudir 
                        <span>01</span> 
                   </button>
                </footer>
            </div>
        </div>
    );
}