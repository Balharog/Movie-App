import React, { Component } from 'react'
import './App.css'
import MovieList from './component/MovieList'
import MovieSearch from './component/MovieSearch'
import RatingSearch from './component/RatingSearch'


export default class App extends Component {
state={
  showModal:false,
  inputValue:'',
  minRating:4,
  movieList:[
   
    {
      id:0,
      movieName:'Aladin',
      movieDate:'1955',
      movieRating: 1,
      movieImage:'http://www.decalsground.com/img_b/vinyl-decal-sticker-335.jpg'
    },
    {
      id:1,
      movieName:'BadBoys',
      movieDate:'1993',
      movieRating: 4,
      movieImage:'http://www.decalsground.com/img_b/vinyl-decal-sticker-335.jpg'
    }
  ]

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
            changeState={this.state.showModal}
            addMov={(el)=> this.setState({movieList: this.state.movieList.concat(el)})} 
            list={this.state.movieList.filter(el=>el.movieRating>this.state.minRating-1 && el.movieName.toLowerCase().includes(this.state.inputValue.toLowerCase()))}/>
          </main>
      </div>
      
    )
  }
}
