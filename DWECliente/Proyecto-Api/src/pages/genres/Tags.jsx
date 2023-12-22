import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Tags = () => {
  const { tags } = useLoaderData()

  console.log(tags)
  return (
    <>
      <h1>Tags</h1>
      <ul>
          {tags.map((tag) => (
              <li key={tag.id}>
                  <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
              </li>
          ))}
      </ul>
    </>
  )
}

export default Tags

export const loaderTags = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/tags?key=${api_key}`)
        const response = await data.json()
        return { tags: response.results }
    } catch (error) {
        console.error("Error fetching tags:", error)
        return { tags: [] }
    }
}