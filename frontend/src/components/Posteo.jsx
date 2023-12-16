import { useEffect, useState } from "react";
import PlayItem from "./PlayItem";
import { Link, useNavigate } from "react-router-dom";

const Posteo = ({ posteos, getPosteo }) => {
  // la información que NO vamos a modificar.
  const [search, setSearch] = useState("");
  const [filterPosteos, setFilterPosteos] = useState(posteos);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = posteos.filter((play) => {
      return play.title.toLowerCase().includes(search.toLowerCase());
    });

    setFilterPosteos(filtered);
  }, [search, posteos]);

  return (
    <div style={{ minWidth: "420px" }}>
      <Link to="/posteo/new" className="btn btn-success">Crear</Link>
      <Link to="/posteo/delete" className="btn btn-success">Borrar</Link>
      <b/>
      <input type="search" className="form-control" placeholder="Search" value={search} onChange={(e) => { setSearch(e.target.value);}}/>
      <>
        {filterPosteos.map((posteo) => {
          return (
            <PlayItem
              getPosteo={getPosteo}
              key={posteo._id}
              posteo={posteo}
              onClick={() => {
                navigate(`/posteo/${posteo._id}`);
              }}
            />
          );
        })}
      </>
    </div>
  );
};

export default Posteo;