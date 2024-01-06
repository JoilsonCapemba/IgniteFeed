import styles from './Avatar.module.css'

export function Avatar(props){
  return(
    <img src={props.src}
         alt={props.alt}
         className={props.hasBorder  ? styles.avatarWithBorder : styles.avatar} 
    />
  )
}