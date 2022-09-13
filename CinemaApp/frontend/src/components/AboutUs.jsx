import {Link} from 'react-router-dom';
import "../about.css"


const AboutUs = () =>{
    return(
       <div>
        <h2 className='meet'>Meet the Team</h2>

  <hr className="hr8" />
  <div className="allcards">
    <div className="cards">

      <div className="main">
        <div className="card">
          <div className="front front1">
            <h3>Emily</h3>
            <p>Scrum Master</p>
          </div>
          <div className="back back1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et
            </p>
            <a>GitHub</a>
            <br/>
            <a>Linkedin</a>

          </div>
        </div>
      </div>

      <div className="main">
        <div className="card">
          <div className="front front2">
            <h3>Shahmeen</h3>
            <p>Product Owner</p>
          </div>
          <div className="back back2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et
            </p>
            <a>GitHub</a>
            <br/>
            <a>Linkedin</a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="card">
          <div className="front front3">
            <h3>Michael</h3>
            <p>Lead Backend Developer</p>
          </div>
          <div className="back back3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et
            </p>
            <a>GitHub</a>
            <br/>
            <a>Linkedin</a>
          </div>
        </div>
      </div>

    </div>


    <div className="cards">

      <div className="main">
        <div className="card">
          <div className="front front4">
            <h3>Madeha</h3>
            <p>Lead Frontend Developer</p>
          </div>
          <div className="back back4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et
            </p>
            <a>GitHub</a>
            <br/>
            <a>Linkedin</a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="card">
          <div className="front front5">
            <h3>Ibraheem</h3>
            <p>Backend Developer</p>
          </div>
          <div className="back back5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et
            </p>
            <a>GitHub</a>
            <br/>
            <a>Linkedin</a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="card">
          <div className="front front6">
            <h3>Jibril</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="back back6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et
            </p>
            <a>GitHub</a>
            <br/>
            <a>Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  </div>
<h2>
  Got no idea what a scrum is?
</h2>

  <p>click here to learn more</p>

       </div>
    );
};

export default AboutUs;