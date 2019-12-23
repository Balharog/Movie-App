import React from 'react'
import MovieRating from './MovieRating'

export default function RatingSearch(props) {
    return (
        <div className="rating-filter">
            <span className="rating-filter-text">Minimum rating</span>
            <MovieRating minStars={props.minStars} ratingChange={(r)=>props.onChangeRate(r)}/>
        </div>
    )
}
