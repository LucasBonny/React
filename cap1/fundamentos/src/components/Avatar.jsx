import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, image }) {

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={image} />
    );
}