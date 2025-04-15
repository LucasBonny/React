# Axios and React Router Dom

Para começar a utilizar essas bibliotecas será necessário instalar.

```bash
npm create vite@latest

npm i axios react-router-dom
```
no arquivo `main.jsx` criar as rotas.
```js

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// Páginas 
import { NewPost } from './routes/NewPost.jsx';
import { Home } from './routes/Home.jsx';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/new",
                element: <NewPost />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

Agora, será necessário alterar em `App.jsx` a rota de carregamento.

```js

```