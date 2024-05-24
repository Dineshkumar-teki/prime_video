import './index.css'

const MovieItem = props => {
  const {movieObj} = props
  const {id, thumbnailUrl} = movieObj
  return (
    <div>
      <img src={thumbnailUrl} alt="" />
      <h1>{id}</h1>
    </div>
  )
}

export default MovieItem
