import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "@phosphor-icons/react"

interface CommentProps{
  content: string,
  onDeleteComment: (comment: string)=> void
}

export function Comment({content, onDeleteComment}: CommentProps){

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount +1);
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

        <footer onClick={handleLikeComment}>
          <button>
            <ThumbsUp  size={20} />
             Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
