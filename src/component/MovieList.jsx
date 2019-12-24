import React from 'react'
import MovieCard from './MovieCard'
import AddMovieModal from './AddMovieModal'


export default function MovieList(props) {

    return (
        
            
        <div className="movie-list">
                {
                    props.list.map((el=> <MovieCard key={el.id} movie={el}/>))
                
                }       
                
                <button className="add-movie-btn">
                    <AddMovieModal 
                    okclicked={(e)=>props.okclicked(e)}
                    getName={(e)=>props.getName(e)}
                    getYear={(e)=>props.getYear(e)}
                    getRating={(e)=>props.getRating(e)}
                    getUrl={(e)=>props.getUrl(e)}
                    />
              </button>
            </div>
        
    )
}
