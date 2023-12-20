import { useLoaderData } from 'react-router-dom'

const Post = () => {
    const {post} = useLoaderData()
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default Post

export const loaderPosts = async({params}) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await data.json()
    return {post}
}