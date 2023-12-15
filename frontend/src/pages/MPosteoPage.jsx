import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../components/Navbar";

const MPosteoPage = () => {
  const { posteoId } = useParams();

  const [posteo, setPosteo] = useState(null);

  const { auth } = useContext(AuthContext);
  const formRef = useRef(null);

  const getPosteo = () => {
    fetch(`${API_URL}/posteo/${posteoId}`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) return alert("Error getting playlist");

        return res.json();
      })
      .then((data) => {
        setPosteo(data);
      });
  };

  useEffect(() => {
    getPosteo();
  }, [posteoId, auth]);

  const handleDeletePost = (musicId) => {
    fetch(`${API_URL}/posteo/${posteoId}`, {
      method: "DELETE",
      headers: {
        Authorization: auth.token,
      },
    }).then((res) => {
      if (!res.ok) return alert("Error deleting music");
      getPosteo();
    });
  };

  const handleCreateNewPost = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(`${API_URL}/posteo/${posteoId}`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        artist: formData.get("author"),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token,
      },
    }).then((res) => {
      if (!res.ok) return alert("Error creating new music");
      getPosteo();
    });

    formRef.current.reset();
  };

  if (!posteo) return <h1>Loading...</h1>;

  return (
    <div>
      <Navbar />
      <h1>{posteo.title}</h1>
      <form onSubmit={handleCreateNewPost} ref={formRef}>
        <input type="text" name="title" placeholder="post title" />
        <input type="text" name="description" placeholder="description of post" />
        <input type="text" name="author" placeholder="author of post" />
        <button>Create new Post</button>
      </form>
      {posteo.map((post) => {
        return (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>
              <i>{post.description}</i>
            </p>
            <button
              className="delete-button"
              onClick={() => handleDeleteMusic(post._id)}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MPosteoPage;