import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside><Sidebar /></aside>
        <main>
          <Post 
          author="Lucas Bonny" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consectetur, odio sequi"  
        />
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consectetur, odio sequi"
          />
        </main>
      </div>
    </div>
  )
}