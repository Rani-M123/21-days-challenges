import React from "react";
import "./App.scss";

import Landing from './Pages/Landing/Landing';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { ThemeContextProvider } from "./Components/ThemeProvider";



const App = () => {

    return (
        <>
       <ThemeContextProvider>
          <BrowserRouter>
    
          <Routes>
            <Route path="/" element={<Landing/>}/>
          </Routes>
          </BrowserRouter>
          </ThemeContextProvider>
        </>

    )


};
export default App;