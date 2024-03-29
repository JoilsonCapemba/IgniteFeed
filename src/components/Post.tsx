import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistance, formatDistanceToNow, formatRelative, subDays } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Author{
  avatarUrl: string,
  name: string,
  role: string,
}

interface Content{
  type: string,
  content: string
}

interface PostProps{
  author: Author,
  content: Content[],
  publishedAt: Date
}


export function Post({author, publishedAt, content}: PostProps){

  const [comments, setComments] = useState(['First coment']);
  const [newCommenttext, setNewCommenttext] = useState('')

  const publishedAtformated = format(publishedAt, "dd 'de' MMM 'de' yyyy 'as' HH:mm'h'",)

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreatenewComment(event: FormEvent){
    event.preventDefault() //usado para nao direcionar o evento noutra pagina
    setComments([...comments, newCommenttext])
    setNewCommenttext('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewCommenttext(event.target.value)
  }

  function deleteComment(commentToDelete: string){
    const commentWithoutdeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentWithoutdeleteOne)
  }

  const isNewCommentEmpty = newCommenttext.length === 0

  return(
    <article className={styles.post}>
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <Avatar className={styles.avatar} hasBorder src={author.avatarUrl} alt="avatar" />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtformated} dateTime={publishedAt.toISOString()}>{publishedAtRelativeToNow}</time> 
      </header>

      <div className={styles.content}>
        {content.map(line =>{
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'link') return <p key={line.content}><a href="#">{line.content}</a></p>
        })}
      </div>

      <form onSubmit={handleCreatenewComment} action="" className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          placeholder='Deixe o seu comentario'
          name='comment'
          onChange={handleNewCommentChange}
          value={newCommenttext}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.listComment}>
        {comments.map(comment =>{
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
        })}      
      </div>
    </article>
  )
}