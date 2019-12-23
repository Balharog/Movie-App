import React from 'react'
import MovieRating from './MovieRating'
export default function MovieCard(props) {
    const {movie={}}=props
    const {
        movieName='',
        movieDate='',
        movieRating= 3,
        movieImage='http://www.decalsground.com/img_b/vinyl-decal-sticker-335.jpg'
    }=movie
    return (
            <div className="movie-card" id="i">
                <div className="movie-rating">{movieRating} <MovieRating rating={props.movie.movieRating} /></div>
                <div className="movie-image" style={{backgroundImage: `url('${movieImage}')`}}></div>
                <div className="movie-name" >{props.movie.movieName} - {props.movie.movieDate}</div>
            </div>
        )
    
}
