import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={Navbar}>
            <Route index element={<p>Homepage Component</p>}/>
            <Route path="/path-to-page" element={<p>Another Component</p>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
