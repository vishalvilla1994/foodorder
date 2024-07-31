import './App.css';
 
 import Header from './Header'
 import { Routes, Route } from 'react-router-dom';
 import About from './about';
 import PageNotFound from './pageNotFound';
import Navigation from './Navigation';
import SearchDetails from './Mockdata';

 




function App(){
  return(
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Header />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/location' element={<PageNotFound />}/>
      <Route path='/Contactus' element={<PageNotFound />}/>
      <Route path='/Login-Signup' element={<SearchDetails />}/>

    </Routes>
    
  
</>
    
  );
}

export default App;
