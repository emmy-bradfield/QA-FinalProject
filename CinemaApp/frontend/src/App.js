import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Main
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/footer.jsx";

// Listings
import Listings from "./components/listings";
import BeautyBeast from "./components/listings/beautyBeef.jsx";
import MoonstersInc from "./components/listings/moonstersInc.jsx";
import DairyMovie from "./components/listings/dairyMovie.jsx";
import Cowsablanca from "./components/listings/cowsablanca.jsx";

// New Releases
import NewReleases from "./components/newReleases";
import TerrorDairy from "./components/newReleases/terrorDairy";
import Moonions from "./components/newReleases/moonions";
import Calftime from "./components/newReleases/calftime";
import TheCows from "./components/newReleases/theCows";

// Information
import Information from "./components/information";
import Screens from "./components/information/screens";
import Opening from './components/information/opening'
import Directions from "./components/information/directions";
import Nearby from "./components/information/nearby";
import Offers from './components/information/offers';
import ContactPage from './components/information/contact.jsx';
import AboutUs from "./components/information/about";
import Scrum from "./components/information/scrum";

// Tickets
import Tickets from './components/tickets';
import Bookings from "./components/tickets/booking";
import Payment from "./components/tickets/payment";
import Orders from './components/tickets/orders.jsx';
import OrderEdit from './components/tickets/orderEdit.jsx';
import Confirmed from "./components/tickets/confirmed";
import SoldOut from "./components/tickets/soldOut";

// Moovies (search and forum)
import Moovies from "./components/moovies";
import Directory from './components/moovies/directory';
import DiscussionBoard from "./components/moovies/forum";
import Certification from './components/moovies/certification';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>

            <Route index element={<Home />} />

            <Route path="/listings" element={<Listings />}>
              <Route path="/listings/beautybeef" element={<BeautyBeast />} />
              <Route path="/listings/moonstersinc" element={<MoonstersInc />} />
              <Route path="/listings/dairymovie" element={<DairyMovie />} />
              <Route path="/listings/cowsablanca" element={<Cowsablanca />} />
            </Route>

            <Route path="/new-releases" element={<NewReleases />} >
              <Route path="/new-releases/terrordairy" element={<TerrorDairy />} />
              <Route path="/new-releases/moonions" element={<Moonions />} />
              <Route path="/new-releases/calftime" element={<Calftime />} />
              <Route path="/new-releases/thecows" element={<TheCows />} />
            </Route>

            <Route path="/information" element={<Information />}>
              <Route index element={<AboutUs />}/>
              <Route path="/information/screens" element={<Screens />} />
              <Route path="/information/directions" element={<Directions />} />
              <Route path="/information/opening" element={<Opening />} />
              <Route path="/information/nearby" element={<Nearby />} />
              <Route path="/information/offers" element={<Offers/>}/>
              <Route path="/information/contact" element={<ContactPage />} />
            </Route>

            <Route path="/tickets" element={<Tickets />}>
              <Route path="/tickets/bookings" element={<Bookings />} />
              <Route path="/tickets/authorise-payment" element={<Payment />} />
              <Route path="/tickets/orders" element={<Orders />}>
                <Route path="/tickets/orders/edit" element={<OrderEdit />} />
              </Route>
              <Route path="/tickets/soldOut" element={<SoldOut />} />
              <Route path="/tickets/confirmed" element={<Confirmed />} />
            </Route>

            <Route path="/moovies" element={<Moovies />} >
              <Route path="/moovies/directory" element={<Directory />} />
              <Route path="/moovies/forum" element={<DiscussionBoard />} />
              <Route path="/moovies/certificates" element={<Certification />} />
            </Route>

          </Route>
          <Route path="/scrum" element={<Scrum />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
