import React from 'react'

export default function AddMovie(props) {
    return (
        <div>
            <button className="add-movie-btn" onClick={(e)=>props.addMovie(
                {
                    id:Math.random,
                    movieName: prompt('Movie Name: '),
                    movieDate: prompt('Movie Year: '),
                    movieRating: prompt('Movie Rating: '),
                    movieImage: prompt('Image URL: ')
                }
            )}>+</button>
        </div>
    )
}
