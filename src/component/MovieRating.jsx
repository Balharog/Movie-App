import React from 'react'

export default function MovieRating(props) {
    let stars=[]
    for (let i=0; i<5 ; i++){
     if (i<props.minStars){
         stars.push(<span onClick={()=>props.ratingChange(i+1)}Key={i}>★</span>)
     }   
     else 
     stars.push(<span onClick={()=>props.ratingChange(i+1)} key={i}>☆</span>)
    }  
    
    return (
        <div>
            {stars}
        </div>
        
    )
}