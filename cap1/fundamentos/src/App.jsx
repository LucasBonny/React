import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

/*

{
    Author: { 
        name: 'Lucas Bonny',
        avatar: 'https://avatars.githubusercontent.com/u/123037864?v=4',
        role: 'Web Developer'
    },
    PublishedAt: Date,
    Content: String,
    Comments: [
        {

        }
    ]
}

*/

const posts = [
  {
    id: 1,
    author: {
      name: 'Lucas Bonny',
      avatar: 'https://avatars.githubusercontent.com/u/123037864?v=4',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 LucasBonny/React'},
      {type: 'link', content: '#novoprojeto #react #rocketseat'}
    ],
    publishedAt: new Date('2022-05-11 08:36:22')
  },{
    "id": 2,
    "author": {
      "name": "Ana Silva",
      "avatar": "https://avatars.githubusercontent.com/ana-silva",
      "role": "Front-end Engineer"
    },
    "content": [
      {"type": "paragraph", "content": "E aí pessoal! 🚀"},
      {"type": "paragraph", "content": "Finalizei meu novo projeto de To-Do List com Vue 3! Quem quiser dar uma olhada:"},
      {"type": "link", "content": "👉 ana-silva/vue-todo-list"},
      {"type": "link", "content": "#frontend #vuejs #produtividade"}
    ],
    "publishedAt": "2022-06-15T14:20:00.000Z"
  },
  {
    "id": 3,
    "author": {
      "name": "Carlos Ribeiro",
      "avatar": "https://placebeard.it/300/300",
      "role": "Mobile Developer"
    },
    "content": [
      {"type": "paragraph", "content": "Bom dia devs! 👨💻"},
      {"type": "paragraph", "content": "Lançando meu primeiro app de finanças pessoais para Android e iOS!"},
      {"type": "link", "content": "👉 Download: financasapp/store"},
      {"type": "link", "content": "#mobile #flutter #fintech"}
    ],
    "publishedAt": "2022-07-02T09:45:00.000Z"
  },
  {
    "id": 4,
    "author": {
      "name": "Mariana Costa",
      "avatar": "https://i.pravatar.cc/300",
      "role": "Full-stack Developer"
    },
    "content": [
      {"type": "paragraph", "content": "Fala comunidade! 👋"},
      {"type": "paragraph", "content": "Disponibilizei um template gratuito de e-commerce usando Node + React:"},
      {"type": "link", "content": "👉 mariana/ecommerce-template"},
      {"type": "link", "content": "#react #nodejs #webdev"}
    ],
    "publishedAt": "2022-08-19T16:10:00.000Z"
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  )
}