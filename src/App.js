import react from 'react';
import './styles/styles.scss';
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Kanstanta from "./Kanstanta";
// import Sekshin3 from  "./Sekshin3";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App =() => {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/blog" element={<Blog/>} exact/>
        <Route path="/kanstanta" element={<Kanstanta/>} exact/>
        {/* <Route path="/Sekshin3" element={<Sekshin3/>} exact/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
