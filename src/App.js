
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './Components/PostView/PostView';
import Createpost from './Components/CreatePost/Createpost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
<Route exact  path='/' element={<LandingPage/>}/>
<Route exact path="/post" element={<PostView/>}/>
<Route path='/CreatePost' element={<Createpost/>}/>
</Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
