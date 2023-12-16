import styles from "../styles/AuthForm.module.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/consts";

function RegisterPosteo() {
  const ref = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { avatar, email, username, password } = e.target.elements;

    const formData = new FormData(e.target);

    const title = formData.get("title");
    const description = formData.get("description");
    const url_img = formData.get("url_img");
    //const author = formData.get("author");

    const posteo = {
      title,
      description,
      url_img,
    };

    const req = await fetch(`${API_URL}/api/posteo`, {
      method: "POST",
      body: JSON.stringify(posteo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.status !== 201) return alert("Error al registrar posteo");
    ref.current.reset();

    navigate("/");
  };

  return (
    <div>
      <h2>Crear Post</h2>
      <form onSubmit={handleSubmit} ref={ref} className={styles.form}>
         <div className={styles.inputGroup}>
          <label htmlFor="">Titulo: </label>
          <input type="text" placeholder="Titulo del post" name="title" />
        </div>
        <div className={styles.inputGroup}>
        <label htmlFor="">Descripción: </label>
          <input type="email" placeholder="Una descripcion del post" name="description" />
        </div>
        <div className={styles.inputGroup}>
        <label htmlFor="">Link a la imagen: </label>
          <input type="text" placeholder="http://www.example-image.com/" name="url_img" />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
export default RegisterPosteo;