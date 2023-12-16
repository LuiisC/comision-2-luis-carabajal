import styles from "../styles/Posteo.module.css";

import { useEffect, useState } from "react";
import { API_URL } from "../utils/consts";
import { PosteoItem } from "../components/PosteoItem";
import { Link } from "react-router-dom";

function PosteosPage() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(`${API_URL}/nologin/posteo/all`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {setPosts(data);});
  }, []);

  return (
    <div className={styles.container}>
      <h2>Página de Posteos de Usuarios: </h2><br/>
      <button>Crear Post</button>
      <Link to="/posteos/new"/>
      <div className={styles.postItem}>{posts.map((elem) => { 
        return ( 
        <PosteoItem 
          key={elem._id}
          title={elem.title}
          description={elem.description}
          url_img={elem.url_img}
          author={elem.author.name}
        />)})}
      </div>
    </div>
  );
}
export default PosteosPage;