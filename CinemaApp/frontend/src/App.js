import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/Footer.jsx";

import Listings from "./components/listings";
import BeautyBeast from "./components/listings/BeautyBeef.jsx";
import MoonstersInc from "./components/listings/MoonstersInc.jsx";
import DairyMovie from "./components/listings/DairyMovie.jsx";
import Cowsablanca from "./components/listings/cowsablanca.jsx";

import NewReleases from "./components/newReleases";
import TerrorDairy from "./components/newReleases/TerrorDairy";
import Moonions from "./components/newReleases/Moonions";
import Calftime from "./components/newReleases/Calftime";
import TheCows from "./components/newReleases/thecows";

import Information from "./components/information";
import Screens from "./components/information/screens";
import Directions from "./components/information/directions";
import Nearby from "./components/information/nearby";
<<<<<<< HEAD
import Scrum from "./components/information/scrum";
=======
import ContactPage from './components/information/contact.jsx';
import Opening from './components/information/opening'
>>>>>>> 296b26e5e556c087334f971cfa562d41d0c685d1

import Tickets from './components/tickets';
import Bookings from "./components/tickets/booking";
import Payment from "./components/tickets/payment";
import Orders from './components/tickets/orders.jsx';
import OrderEdit from './components/tickets/orderEdit.jsx';
import SoldOut from "./components/tickets/SoldOut";

import AboutUs from "./components/AboutUs";
import DiscussionBoard from "./components/DiscussionBoard";
import Moovies from "./components/moovies.jsx";

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
            <Route path="/moovies" element={<Moovies />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/authorise-payment" element={<Payment />} />
            <Route path="/tickets" element={<Tickets />}>
              <Route path="/tickets/bookings" element={<Bookings />} />
              <Route path="/tickets/orders" element={<Orders />}>
                <Route path="/tickets/orders/edit" element={<OrderEdit />} />
              </Route>
              <Route path="/tickets/SoldOut" element={<SoldOut />} />
            </Route>
            <Route path="/new-releases" element={<NewReleases />} />
            <Route path="/new-releases/terrordairy" element={<TerrorDairy />} />
            <Route path="/new-releases/moonions" element={<Moonions />} />
            <Route path="/new-releases/calftime" element={<Calftime />} />
            <Route path="/new-releases/thecows" element={<TheCows />} />
            <Route path="/openings" element={<Opening />} />
            <Route path="/discuss" element={<DiscussionBoard />} />
            <Route path="/information" element={<Information />}>
              <Route path="/information/screens" element={<Screens />} />
              <Route path="/information/directions" element={<Directions />} />
              <Route path="/information/nearby" element={<Nearby />} />
            </Route>
            <Route path="/scrum" element={<Scrum />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aboutus" element={<AboutUs />}/>

          </Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
