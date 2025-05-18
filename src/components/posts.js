import {useEffect} from "react";
import {getPost } from "../api/PostApi";

const posts = () => {

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  }

  useEffect(() => {
    getPostData();
  }, []); 


    return <div>
        home page
    </div>
}

export default posts