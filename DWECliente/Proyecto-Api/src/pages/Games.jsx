import { useLoaderData, Link } from "react-router-dom"

const Blog = () => {
    console.log(useLoaderData())
    const { blogs} = useLoaderData()

    return (
        <div>
            <ul>
                {
                    blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <li key={blog.id}>
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            </li>
                        ))
                    ) : (<h1>No hay datos</h1>)
                }
            </ul>
        </div>
    )
}

export default Blog

export const loaderBlogs = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const blogs = await data.json()
    return {blogs}
}