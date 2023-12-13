let listOfPosts = [
    {
        id: Date.now(),
        title:"La creacion de un proyecto en React",
        desc: "Cree mi proyecto con ViteJS",
        image: "https://"
    },
    {
        id: Date.now()+1,
        title:"La creacion de un proyecto en Angular",
        desc: "Cree mi proyecto con ViteJS",
        image: "https://"
    }
]
const createNewPost = ({ title, desc, image }) => {
    if (!title) return null;
  
    const newPost = { id: Date.now(), title, desc, image };
  
    listOfPosts.push(newPost);
  
    return newPost;
  };
  
  const getAllPosts = () => {
    return [...listOfPosts];
  };

  const getPostById = ({ id }) => {
    const post = listOfPosts.find((post) => post.id === id);
  
    return post;
  };

  const findPostByIdAndUpdate = (id, data) => {
    const post = getPostById({ id });
  
    if (!post) return null;
  
    listOfPosts = listOfPosts.map((post) => {
      if (post.id === id) {
        if (data.title) post.title = data.title;
        if (data.desc) post.desc = data.desc;
        if (data.image) post.image = data.image;
  
        return post;
      }
  
      return post;
    });
  
    return {
      ...post,
      ...data,
    };
  };

  const deletePostById = ({ id }) => {
    listOfPosts = listOfPosts.filter((post) => post.id !== id);
  };
  
  export const postModel = {
    findAll: getAllPosts,
    create: createNewPost,
    findOne: getPostById,
    update: findPostByIdAndUpdate,
    destroy: deletePostById,
  };