import { useLoaderData, Link } from "react-router-dom"

const Card = ({ item, linkPrefix }) => (
    <div className="col">
      <Link to={`${linkPrefix}/${item.id}`}>
        <div className="card m-1">
          <img src={item.image_background} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
  
  const Section = ({ title, items, linkPrefix }) => (
    <>
      <h2 className='text-center mb-3'>{title}</h2>
      <div className="d-flex flex-wrap row-cols-md-6 g-2">
        {items.length > 0 ? (
          items.map((item) => <Card key={item.id} item={item} linkPrefix={linkPrefix} />)
        ) : (
          <div className="col"> <h2>No data found</h2> </div>
        )}
      </div>
    </>
  )
  
  const Genres = () => {
    const { genres, tags } = useLoaderData()
    return(
    <>
      <Section title="Genres" items={genres} linkPrefix="/genres" />
      <Section title="Tags" items={tags} linkPrefix="/tags" />
    </>
  )
}
  
  export default Genres