import {useEffect} from "react";
import {getPost } from "../api/PostApi";
import { deletePost } from "../api/PostApi";
import {useState} from "react";
import "../App.css" 
import "../stylesheets/Loader.css"
import Form from "./Form"
const Posts = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const getPostData = async () => {
    setLoading(true); 
    try {
      const res = await getPost();
      setData(res.data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
    setLoading(false);
  }

  const handlerDeletePost = async (id)=>{
    try{
      const res = await deletePost(id);
      if(res.status === 200){
        const newUpdatedData = data.filter((currentPost)=>{
          return currentPost.id !== id;
        })
        setData(newUpdatedData);
      }
    }
    catch (error){
      console.log("failed to delete the post", error);
    }
  }

  useEffect(() => {
    getPostData();
  }, []); 

  return(
    <>
      <section className="section-form">
        <Form data={data} setData={setData}/>
      </section>
      <section className = "section-post">
        {
          loading ? (
          <div className="loader">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          ) : 
          data.map((currentElement) => {
            const {id, title, body} = currentElement;
            return(
              <div key={id} className="post-card">
                <h3>{id}. {title}</h3>
                <p>{body}</p>
                <div className="post-actions">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete" onClick={()=> handlerDeletePost(id)}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </section>
    </>
  );
}

export default Posts