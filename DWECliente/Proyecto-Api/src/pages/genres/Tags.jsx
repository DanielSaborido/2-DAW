import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Tags = () => {
  const { tags } = useLoaderData()

  console.log(tags)
  return (
    <>
      <h1>Tags</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">
          {
              tags.length > 0 ? (
                  tags.map((tag) => (
                      <div key={tag.id} className="col">
                          <Link to={`/tags/${tag.id}`}>
                              <div className="card h-100">
                                  <img src={tag.image_background} className="card-img-top h-50" alt={tag.name} />
                                  <div className="card-body">
                                      <h5 className="card-title">{tag.name}</h5>
                                  </div>
                              </div>
                          </Link>
                      </div>
                  ))
              ) : (<div className="col"> <h2>No hay datos</h2> </div>)
          }
      </div>
    </>
  )
}

export default Tags

export const loaderTags = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/tags?page_size=40&key=${api_key}`)
        const response = await data.json()
        return { tags: response.results }
    } catch (error) {
        console.error("Error fetching tags:", error)
        return { tags: [] }
    }
}