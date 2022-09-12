import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from './components/Footer.jsx';

import Listings from "./components/listings.jsx";
import BeautyBeast from "./components/BeautyBeef.jsx";
import MoonstersInc from "./components/MoonstersInc.jsx";
import DairyMovie from "./components/DairyMovie.jsx";
import Cowsablanca from "./components/Cows-ablanca.jsx";

import Opening from "./components/opening";
import NewReleases from "./components/newreleases";
import TerrorDairy from "./components/TerrorDairy";
import Moonions from "./components/Moonions";
import Calftime from "./components/Calftime";
import TheCows from "./components/thecows";

import Information from "./components/information";
import Screens from "./components/screens";
import Directions from "./components/directions";
import Nearby from "./components/nearby";

import Tickets from './components/tickets.jsx';
import Bookings from "./components/booking";
import Payment from "./components/payment";
import Orders from './components/orders.jsx';
import OrderEdit from './components/orderEdit.jsx';

import ContactPage from './components/Contactpage.jsx';
import SoldOut from "./components/SoldOut";
import DiscussionBoard from "./components/DiscussionBoard";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/beautybeef" element={<BeautyBeast />} />
            <Route path="/listings/moonstersinc" element={<MoonstersInc />} />
            <Route path="/listings/dairymovie" element={<DairyMovie />} />
            <Route path="/listings/cowsablanca" element={<Cowsablanca />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path ="/authorise-payment" element={<Payment />}/>
            <Route path="/tickets" element={<Tickets/>}>
              <Route path="/tickets/bookings" element={<Bookings />}/>
              <Route path="/tickets/orders" element={<Orders />}>
                <Route path="/tickets/orders/edit" element={<OrderEdit />}/>
              </Route>
              <Route path="/tickets/SoldOut" element={<SoldOut />} />
            </Route>
            <Route path="/new-releases" element={<NewReleases/>}/>
            <Route path="/new-releases/terrordairy" element={<TerrorDairy/>}/>
            <Route path="/new-releases/moonions" element={<Moonions/>}/>
            <Route path="/new-releases/calftime" element={<Calftime/>}/>
            <Route path="/new-releases/thecows" element={<TheCows/>}/>
            <Route path="/openings" element={<Opening />} />
            <Route path="/discuss" element={<DiscussionBoard />} />            
            <Route path="/information" element={<Information/>}>
              <Route path="/information/screens" element={<Screens />}/>
              <Route path="/information/directions" element={<Directions />}/>
              <Route path="/information/nearby" element={<Nearby />}/>
            </Route>
            <Route path="/contact" element={<ContactPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
