import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

export default function MovieList(props) {

    return (
        
            <div className="movie-list">
                {
                    props.list.map((el=> <MovieCard key={el.id} movie={el}/>))
                
                }       
                <AddMovie addState={props.changeState} addMovie={(m)=>props.addMov(m)}/>
            </div>
        
    )
}
