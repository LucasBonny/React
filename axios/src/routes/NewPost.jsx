import { useState } from "react";
import blogFetch from '../axios/config'
import "./NewPost.css"
import { useNavigate } from 'react-router-dom'

export const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId : 1 };

    await blogFetch.post("/posts", post);

    navigate("/");
  } ;
  return (
    <div className="new-post">
      <h2>Inserir novo Post</h2>
      <form onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Titulo: </label>
          <input type="text" name="title" id="title"
            placeholder="Digite o titulo" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo: </label>
          <textarea name="body" id="body" placeholder="Digite o conteudo" onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Criar post" className="btn" />
      </form>
    </div>
  )
}