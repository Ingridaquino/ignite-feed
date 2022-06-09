import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";

import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String
//1
const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/ingridaquino.png',
      name: 'Ingrid Aquino',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/klintonlee.png',
      name: 'Klinton Lee',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-19-06 15:00:00'),
  },
];

//Iteração 

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}


