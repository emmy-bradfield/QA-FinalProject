import offerImg from "../../assets/ticketpic.jpg";
import miniImg from "../../assets/minipic.jpg";
import nurseImg from "../../assets/nursepic.jpg";


const Cinemaoffer = () =>{
    return (
        <main className="Offer"> 
            <h1> Offers</h1>
            <p>Get Two Cinema Ticket for the price of one only Sundays!!!</p>
            <img className="offer" src={offerImg} />

            <p>Mini Mornings at QA Cinema. Small People. Big Experience. Tickets for kids' films from £2.49/€2.99 for both children and adults at Vue.</p>
            <img className="offer" src={miniImg} />

            <p>The reward scheme exclusively for NHS Staff members can enjoy 2-for-1 film tickets every Tuesday or Wednesday for a whole year..</p>
            <img className="offer" src={nurseImg} />

        </main>


    );
};

export default Cinemaoffer;