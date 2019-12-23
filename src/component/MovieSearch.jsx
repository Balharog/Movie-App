import React from 'react'

export default function MovieSearch(props) {
    return (
            <div className="search-bar">
                <input className="movie-search-bar" onChange={(event)=> props.onChange(event.target.value)}/>
                <button className="movie-search-button">Search</button>
            </div>
    )
}
