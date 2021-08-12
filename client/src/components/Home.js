import React, {useState} from 'react';
import axios from 'axios';
import '../home.css';

function Home() {
    // states starts
    const[movieName, setMovieName] = useState('');
    const [movieRating, setMovieRating] = useState(0);
    const [movieGenre, setMovieGenre] = useState('');
    const [released, setReleased] = useState('');
    // states ends
    // function to add the ui content to the server
        const addMovie = () =>{
            axios.post('http://localhost:9000/insert',  {moviename:movieName,movierating:movieRating,
            moviegenre:movieGenre, released:released
        })
        
    }

    return (


        
        <div>
            <div className='container'>
            <div className='parent'>
                
                <h1>  Add your Favourite  Movie </h1>
            <div className='insert'>
                <label> Movie Name </label>
                <input type='text' name='movname' onChange={(event) => setMovieName(event.target.value)} ></input>
                <label> Movie Rating </label>
                <input type='number' name='movrating' onChange={(event) => setMovieRating(event.target.value)} ></input>
                <label> Movie Genre </label>
                <input type='text' name='genre' onChange={(event) => setMovieGenre(event.target.value)} ></input>
                <label> IsReleased </label>
                <input type='text' name='released' onChange={(event) => setReleased(event.target.value)} ></input>
                <button className='btn btn-success mybtn' onClick={addMovie}  > Add this Movie </button>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default Home
