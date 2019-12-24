import React, { Component } from 'react'
import './App.css'
import MovieList from './component/MovieList'
import MovieSearch from './component/MovieSearch'
import RatingSearch from './component/RatingSearch'


export default class App extends Component {
state={
  
  inputValue:'',
  minRating:1,
  movieList:[
   

  ],
  nameMovie:"",
  yearMovie:"",
  ratingMovie:"",
  imageMovie:"",
  idMovie:""

}





  render() {
    return (
      <div>
        
          <header>
            <MovieSearch onChange={(inputVal)=> this.setState({inputValue: inputVal})}/>
            <RatingSearch minStars={this.state.minRating} onChangeRate={(r)=> this.setState({minRating: r})} />
          </header>
          <main>
     
            <MovieList 
            addMov={(el)=> this.setState({movieList: this.state.movieList.concat(el)})} 
            list={this.state.movieList.filter(el=>el.movieRating>this.state.minRating-1 && el.movieName.toLowerCase().includes(this.state.inputValue.toLowerCase()))}
            getName={(e)=>this.setState({nameMovie: e})}
            getYear={(e)=>this.setState({yearMovie: e})}
            getRating={(e)=>this.setState({ratingMovie: e})}
            getUrl={(e)=>this.setState({imageMovie: e})}
            okclicked={()=>this.setState({movieList:this.state.movieList.concat({      
              id:this.state.movieList.length+1,
              movieName:this.state.nameMovie,
              movieDate:this.state.yearMovie,
              movieRating:this.state.ratingMovie ,
              movieImage:this.state.movieImage})
            }
            )
          }/>

          </main>
      </div>
      
    )
  }
}
