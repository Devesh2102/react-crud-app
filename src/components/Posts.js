import {useEffect} from "react";
import {getPost } from "../api/PostApi";
import {useState} from "react";

const Posts = () => {

  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
    console.log(res.data)
  }

  useEffect(() => {
    getPostData();
  }, []); 


    return <section className = "section-post">
      <ul>
        {
          data.map((currentElement)=> {
            const {id, title, body} = currentElement;
            return(
              <li key={id}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </li>
            )

          })
        }
      </ul>
    </section>
}

export default Posts