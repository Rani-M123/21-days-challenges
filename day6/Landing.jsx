import React from 'react'
import './Landing.scss'
import Header from './../../Components/Header/Header';
import Cards from '../../Components/StoryCards/Cards';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Login from '../../Components/Loginpage/Login';
// import  { useState, useEffect } from "react";
// import "../App.css";

// import Movie from "./Movie";
// import Search from "./Search";




const Landing = () => {
  return (
    
    // <BrowserRouter>
       
    // <Routes>
    //   <Route path='/signin' element={<Login/>}/>

    // </Routes>
    // </BrowserRouter>

    
   

// const MOVIE_API_URL = "https://jsonplaceholder.typicode.com/todos/1"; // you should replace this with yours


// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);

//     useEffect(() => {
//     fetch(MOVIE_API_URL)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         setMovies(jsonResponse.Search);
//         setLoading(false);
//       });
//   }, []);

//     const search = searchValue => {
//     setLoading(true);
//     setErrorMessage(null);

//     fetch(`${searchValue}`)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         if (jsonResponse.Response === "True") {
//           setMovies(jsonResponse.Search);
//           setLoading(false);
//         } else {
//           setErrorMessage(jsonResponse.Error);
//           setLoading(false);
//         }
//       });
//   	};

    
//     return (
//      <div className="App">
//       <Header text="HOOKED" />
//       <Search search={search} />
//       <p className="App-intro">Sharing a few of our favourite movies</p>
//       <div className="movies">
//         {loading && !errorMessage ? (
//          <span>loading...</span>
//          ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           movies.map((movie, index) => (
//             <Movie key={`${index}-${movie.Title}`} movie={movie} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// 
// export default App;
    
     <div className="our-story-container">
     <Header />
     <Cards />
    
     </div>   
   )
}

export default Landing;