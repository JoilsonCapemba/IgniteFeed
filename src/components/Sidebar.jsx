import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
      src="https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=2048x2048&w=is&k=20&c=-jD9mQ8BUfRY9qsMECFTAp-xNjbEuCOOLi2u38SqmdA=" 
      alt="teste"
      className={styles.cover} 
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/joilsoncapemba.png"
         alt="avatar"
        />

        <strong>Joilson Capemba</strong>
        <span>Eng. de Software</span>
      </div>

      <footer>
        <a href="#">Editar Seu perfil</a>
      </footer>

    </aside>
  )
}