import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: true,
  }
  return (
    <div>
      <h1>Action Movies</h1>
      <Slider {...settings}>
        {movies.map(movie => (
          <MovieItem movieObj={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
