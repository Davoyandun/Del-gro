import React, { useEffect, useContext } from "react";
import AgroContext from "../context/AgroContext";
import CardBlog from "../components/CardBlog";
import imgBlog from "../styles/images/blog.png"

export default function Blog() {
  const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getPosts();
  }, []);

  return (
    <div>
      <img src={imgBlog} alt="Imagen No encontrada" />
      {Context.posts ? (
        Context.posts.map((post) => (
          <CardBlog
            key={post.id}
            image={post.image}
            name={post.name}
            id={post.id}
            description={post.description}
          />
        ))
      ) : (
        <div>No hay noticias</div>
      )}
  
    </div>
  );
}
