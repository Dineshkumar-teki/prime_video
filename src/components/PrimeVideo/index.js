// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    let comedyMovies = []
    let actionMovies = []
    moviesList.map(eachMovie => {
      if (eachMovie.categoryId === 'ACTION') {
        actionMovies = [...actionMovies, eachMovie]
      } else {
        comedyMovies = [...comedyMovies, eachMovie]
      }
      return null
    })
    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="moviesContainer">
          <h1>Action Movies</h1>
          <MoviesSlider movies={actionMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
