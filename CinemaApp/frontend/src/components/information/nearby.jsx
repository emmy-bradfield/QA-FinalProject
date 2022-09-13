import foodImg from "../../assets/fiveguyspic.jpg";
import arcadeImg from "../../assets/arcadepic.jpg";
import shoppingImg from "../../assets/shoppingpic2.jpg";
import escapeImg from "../../assets/escapepic2.jpg";
const Nearby = () =>{
    return(
        <main>
            <h1> Places to go </h1>
            <h3>Five Guys</h3>
            <div className="places">
                
                <p>Five Guys was The Place to get a fresh, juicy burger with all the toppings you could stuff between fresh-baked buns.To this day, the formula remains simple, ‘Burgers and Fries cooked to perfection’, in keeping with Jerry’s philosophy of “To perfect and to serve.” The family is also still very much involved, meeting every Tuesday with every member still very much part of the business  </p>
                <img className="burger" src={foodImg}/> 
            </div>
            <h3>Arcade</h3>
            <div className="places">
            <img className="arcade" src={arcadeImg}/> 
                <p>Great Arcades exists to keep the games going and to bring back the ones that we’ve all missed. We couple great design and creative technology to supply you with the gaming systems, accessories, and apparel you need to quench your nostalgic thirst for the classics. Some people have told us that Great Arcades makes 'the cool arcade for the modern gamer’ and, well, we agree! The traditional arcade was a glorious product for its time and we view Great Arcades as the next step in the evolution of the home arcade gaming system.</p>
                
            </div>
            <h3>Westfield</h3>
            <div className="places">
                <p>one of the largest urban shopping centres in Europe, with 250 shops and more than 70 places to eat.In the UK and Europe, Westfield own and operate Europe’s two largest shopping centres, Westfield London and Westfield Stratford City.</p>
                <img className="shopping" src={shoppingImg}/> 
            </div>
            <h3>Escape Room</h3>
            <div className="places">
            <img className="escape" src={escapeImg}/>
                <p>An escape room is a 60-minute real-life adventure game. You and your team will assemble in a themed room and will have one hour to complete your mission and “escape” the room. A successful escape will require you to find hidden clues and solve challenging puzzles throughout the room.</p>
                
            </div>

        </main>
    );
};

export default Nearby;