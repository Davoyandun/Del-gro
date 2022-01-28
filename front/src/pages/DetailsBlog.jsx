import React, { useEffect, useContext } from "react";
import AgroContext from "../context/AgroContext";
import { useParams } from "react-router-dom";


export default function DetailsBlog() {
  const { idBlog } = useParams();
  const Context = useContext(AgroContext);
  useEffect(() => { 
      Context.getPosts()
   }, [])

  return (
    <div>
      {Context.posts ? (
        Context.posts.map((post) => {
          console.log(post, idBlog);
          if (post.id == idBlog) {
            return (
              <div>
                <h3> {post.name}</h3>
                <img src={post.image} alt="Imagen no encontrada" />
                <p>{post.description}</p>
              </div>
            );
          }
        })
      ) : (
        <div>Recarga la pagina</div>
      )}
    </div>
  );
}
