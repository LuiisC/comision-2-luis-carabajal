import styles from "../styles/Posteo.module.css";

import { useCallback, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import Posteo from "../components/Posteo";
import Navbar from "../components/Navbar";

function PosteosPage() {
  const [posteos, setPosteos] = useState([]);

  const { auth } = useContext(AuthContext);

  const getPosteo = useCallback(() => {
    fetch(`${API_URL}/posteo`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosteos(data))
      .catch((err) => console.log(err));
  }, [auth.token]);

  useEffect(() => {
    getPosteo();
  }, [auth, getPosteo]);

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>My posts</h1>
      <main className={styles.section}>
        <Posteo getPosteo={getPosteo} posteos={posteos} />
      </main>
    </div>
  );
}
export default PosteosPage;