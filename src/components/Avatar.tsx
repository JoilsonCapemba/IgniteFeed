import styles from './Avatar.module.css'

interface AvatarProps{
  src: string,
  alt?: string,
  hasBorder?: boolean
}

export function Avatar(props: AvatarProps){
  return(
    <img src={props.src}
         alt={props.alt}
         className={props.hasBorder  ? styles.avatarWithBorder : styles.avatar} 
    />
  )
}