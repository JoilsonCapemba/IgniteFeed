import { Header } from './components/Header'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Fala ai dev',},
      {type: 'paragraph', content: 'Bara la codar com a RocketSeat',},
      {type: 'link', content: 'Facebook.com'}
    ],
    publishedAt: new Date('2023-12-10 17:00:12'),
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/joilsoncapemba.png',
      name: 'Joilson Capemba',
      role: 'Software Enginer'
    },
    content: [
      {type: 'paragraph', content: 'Fala ai dev',},
      {type: 'paragraph', content: 'Bara la codar com a RocketSeat',},
      {type: 'link', content: 'joilsonCapemba@gmail'}
    ],
    publishedAt: new Date('2023-12-11 20:00:12'),
  }
]


function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt} 
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
