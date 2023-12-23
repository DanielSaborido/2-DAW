import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

const Developers = () => {
    const { developers } = useLoaderData()
  
    console.log(developers)
    return (
      <>
        <h1>Developers</h1>
        <ul>
            {developers.map((developer) => (
                <li key={developer.id}>
                    <Link to={`/developers/${developer.id}`}>{developer.name}</Link>
                </li>
            ))}
        </ul>
      </>
    )
}

export default Developers

export const loaderDevelopers = async({api_key}) => {
    try {
        const data = await fetch(`https://api.rawg.io/api/developers?key=${api_key}`)
        const response = await data.json()
        return { developers: response.results }
    } catch (error) {
        console.error("Error fetching developers:", error)
        return { developers: [] }
    }
}