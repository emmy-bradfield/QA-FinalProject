import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home.jsx';
import Navbar from './components/navbar';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                        element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
