import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Link, Route, Routes } from 'react-router-dom';
import Carddetails from './pages/Carddetails';
import Carddetails2 from './pages/Carddetails2';
import Carddetails3 from './pages/Carddetails3';
import Carddetails4 from './pages/Carddetails4';
import Carddetails5 from './pages/Carddetails5';
import Carddetails6 from './pages/Carddetails6';

function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' exact element={<Home/>} />
          <Route path='/details' exact element={<Carddetails/>} />
          <Route path='/details2' exact element={<Carddetails2/>} />
          <Route path='/details3' exact element={<Carddetails3/>} />
          <Route path='/details4' exact element={<Carddetails4/>} />
          <Route path='/details5' exact element={<Carddetails5/>} />
          <Route path='/details6' exact element={<Carddetails6/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
