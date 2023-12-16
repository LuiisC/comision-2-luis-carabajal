export const PosteoItem = ({ title, description, url_img, author }) => {

  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={url_img} alt={title}/>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <p>URL: {url_img}</p>
          <p><strong>Autor: {author}</strong></p>
        </div>
      </div>
    </div>
  );
};