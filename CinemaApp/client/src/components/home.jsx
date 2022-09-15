import {Link} from 'react-router-dom';
const Home = () => {

   return(
    <>
        <div className="main-text">
            <div className="main-text">
               <h1 className="title">QA Cinemas<hr className="hr1"/></h1>
          
               <p className="text">An Udderly Unbeefable Moovie Experience</p>
            </div>
            <div className="col">
                <div className="card-img card1">
                    <Link to="/information">
                        <h4>Enjoy</h4>
                        <p>Relax yourself to the fullest knowing you made the right choice</p>
                    </Link>
                </div>
                <div className="card-img card2">
                    <Link to="/listings">
                        <h4>Escape</h4>
                        <p>Get lost in the excitment with a world of moovies to choose from</p>
                    </Link>
                </div>
                <div className="card-img card3">
                    <Link to="/moovies">
                        <h4>Explore</h4>
                        <p>Discover riveting stories and share in them with others</p>
                    </Link>
                </div>
                <div className="card-img card4">
                    <Link to ="/new-releases">
                        <h4>Experience</h4>
                        <p>Experience new adventures with new releases </p>
                    </Link>
                </div>

            </div>
        </div>
    </>
   )

} 

export default Home;