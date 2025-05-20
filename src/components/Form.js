import {useState} from 'react'
import { addPost } from '../api/PostApi'
const Form = ({data, setData})=>{
    const [addPostData, setAddPostData] = useState({
        title:"",
        body:"",
    })

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setAddPostData((previousData)=>{
           return{
            ...previousData, [name]:value
           }
        })
    }

    const addPostDetails = async () => {
       const res = await addPost(addPostData)
       if (res.status === 201){
        setData([...data, res.data])
       }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        addPostDetails();
    }


    return ( 
    <form onSubmit={handleSubmitForm}>
        <div>
            <label htmlFor="title"></label>
            <input type="text" autoComplete="off" id="title" name="title" placeholder="add title" value={addPost.title}
            onChange={handleInputChange}/>
        </div>
        <div>
            <label htmlFor="body"></label>
            <input type="text" autoComplete="off" id="body" name="body" placeholder="add post" value={addPost.body}
            onChange={handleInputChange}
            />
        </div>
        <button type="submit" className="btn-add">Add</button>
    </form>
    )    
}

export default Form;