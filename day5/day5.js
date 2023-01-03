import React  from 'react';
// import Header from './Header';
//import Navbar from './Navbar';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import Index from './pages/Home';
import Dash from './pages/Home/Dashboard';

const App = () => {
return (
  <div>

    <BrowserRouter>
    <Link to='/'><li>Header</li></Link>
            <Link to="/network"><li>network</li></Link>
            <Link to="/job"><li>job</li></Link>
            <Link to="/message"><li>message</li></Link>
            <Link to="/notofication"><li>notification</li></Link>
            <Link to="/"><div>Dashboard</div></Link>
            <Routes>
    
      <Route path ="/"  element= {<Dash/>}/>
      <Route path ="/network" element = {<network/>}/>
      <Route path ="/job"  element = {<job/>}/>
      <Route path ="/message"  element = {<message/>}/>
      <Route path ="/notification"  element = {<notification/>}/>
      </Routes>
      {/* <Header/> */}
    {/* <Navbar />
     */}
      </BrowserRouter>
      
    
  
  </div>
)
}
      export default App