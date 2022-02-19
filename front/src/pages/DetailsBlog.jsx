import React, { useEffect, useContext } from "react";
import AgroContext from "../context/AgroContext";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import detail1 from "../styles/images/detail1.png";
import detail2 from "../styles/images/detail2.png";
import detail3 from "../styles/images/detail3.png";

export default function DetailsBlog() {
  const { idBlog } = useParams();
  const Context = useContext(AgroContext);
  useEffect(() => {
    Context.getPosts();
  });

  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={detail1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={detail2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={detail3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      {Context.posts ? (
        Context.posts.map((post) => {
          if (post.id === idBlog) {
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
