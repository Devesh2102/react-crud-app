import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getPost = () => {
    return api.get('/posts')
}

export const addPost = (post) => {
    return api.post("/posts", post)
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}