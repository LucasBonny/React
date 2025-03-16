export function Post(props) {

    return (
      <div>
        <h1>Author: {props.author}</h1>
        <p>{props.content}</p>
      </div>
    )
  }