import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "@phosphor-icons/react"

export function Comment({content, onDeleteComment}){

  function handleDeleteComment(){
    onDeleteComment(content)
  }
  

  return(

    <div className={styles.comment}>
      <Avatar src="https://github.com/joilsoncapemba.png" alt="avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAdTime}>
              <strong>Joilson</strong>
              <time title='05 07 2023 as 10:30' dateTime='2023-11-27 10:13:00'>Cerca de 1h</time>
            </div>

            <button title='deletar comentario' onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
             Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
