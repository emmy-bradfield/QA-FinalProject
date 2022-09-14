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
            <p> As Scrum Master, my role was to direct the team and lead them through their daily tasks with a approach called <a href='https://www.atlassian.com/agile#:~:text=Agile%20is%20an%20iterative%20approach,small%2C%20but%20consumable%2C%20increments.' target="_blank">Agile. </a> 
             Click to learn more.
            </p>
            <a href='https://github.com/emmy-bradfield' target="_blank">GitHub</a>
            <br/>
            <a href='https://www.linkedin.com/in/emilyjanebradfield/' target='_blank'>Linkedin</a>

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
          <p>As Product Owner, I was in charge of the products outcome, what you are seeing and interacting with right now! Design processes were all done through me to ensure a consistent theme throughout the site.    </p>
            <a href='https://github.com/shahmeen-shaikh' target='_blank'>GitHub</a>
            <br/>
            <a href='https://www.linkedin.com/in/shahmeen-shaikh-a181a1192/' target='_blank'>Linkedin</a>
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
          <p>As the lead backend developer, I overlooked all backend development and ensured Ibraheem and I maintained agile approach.</p>
            <a href='https://github.com/MichaelKing674' target='_blank'>GitHub</a>
            <br/>
            <a href='https://www.linkedin.com/in/michaelking01/' target='_blank'>Linkedin</a>
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
          <p>As Lead frontend developer, my job was to create pages and add styling to them. As well as implementing the Product Owners design requirements into each page. 
            </p>
            <a href='https://github.com/Madeha98' target='_blank'>GitHub</a>
            <br/>
            <a href='https://www.linkedin.com/in/madeha-rawshon/' target='_blank'>Linkedin</a>
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
          <p>As a backend developer, I had to help Michael develop all backend processes and incoporate them into the site to add functionality.
            </p>
            <a href='https://github.com/ibraheem-latif' target='_blank'>GitHub</a>
            <br/>
            <a href='https://www.linkedin.com/in/ibraheem-latif/' target='_blank'>Linkedin</a>
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
          <p>As frontend developer my main responsibility was creating some of the pages on the site with the direction of the Madeha, ensuring the pages were responsive and reactive. 
            </p>
            <a href='https://github.com/Jib-Yusuf' target='_blank'>GitHub</a>
            <br/>
            <a href='https://www.linkedin.com/in/jabril-yusuf-ba6707246/' target='_blank'>Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='scrumtext'>
<h2>
  Got no idea what a scrum is?
</h2>

  
  <Link to="/scrum">Click here to learn more</Link>
  </div>
       </div>
    );
};

export default AboutUs;