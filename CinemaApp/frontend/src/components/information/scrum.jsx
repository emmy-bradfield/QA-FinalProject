<<<<<<< HEAD
import { Link } from 'react-router-dom';

const Scrum = () => {
    return (
        <main className="scrum">
            <div className="center drop3">
                <Link to="/information"><i className="fa-solid fa-chevron-left in5"></i> Return to main website</Link>
                <div className="card-subtle3 stack">
                    <h2>What is Scrum?</h2>
                    <p>
                        A scrum framework establishes effective project management and helps members
                        of a team and organisation to work collaboratively and complete tasks more
                        efficiently. This is done through cross functional teams where a scrum master,
                        a product owner, and developers constitute a scrum team.
                    </p>
                    <ul className="no-bullet">
                        <li>
                            Scrum master: guides the team in ensuring the scrum framework is implemented
                            and followed
                        </li>
                        <li>
                            Product owner: the lead of the product concept, responsible for management
                            of the product backlog
                        </li>
                        <li>
                            Developers: any contributors to the delivery of the product, includes with
                            no technical specialty
                        </li>
                    </ul>
                    <p>
                        Projects are managed by scrum artifacts which are designed to make key
                        information transparent so that everyone can view the team's progress. Tasks
                        that need to be complete are listed in the product backlog and are broken into
                        more detailed items with attributes like story points and prioritisation. Items
                        are selected for a sprint which is a period of time, such as one month, during
                        which the selected tasks should be completed to meet the sprint goal; this is
                        determined during the sprint planning stage and may be continuously refined.
                        As a sprint progresses, the sprint backlog items are defined as either 'to
                        do', 'in progress' or 'done'. Each day a 15-minute meeting, known as the daily
                        scrum, is held to review progress and discuss any actions plans, strengthening
                        communication and work ethic. At the end of a sprint, a sprint review takes
                        place to assess the result and update the product backlog. A sprint
                        retrospective is also held and is where the scrum team come together to
                        analyse any good or bad outcomes and how improvements can be made. Further
                        information on scrum can be found <a href="http://scrum.org/%22%3E">here</a>.
                    </p>
                    <h2>How We Used Scrum</h2>
                    <p>
                        The scrum framework was effectively implemented throughout the build of the
                        product for this project. This was led by the scrum master, Emily, who
                        conducted daily scrum meetings at 9am where the whole team reviewed the
                        progression of the sprint and the allocation of items in the sprint backlog.
                        Tasks were split into two five-day sprints which were all displayed on Jira,
                        allowing team members to clearly view each item's status and assignee, and
                        make changes where necessary. Consistent use of this board had a beneficial
                        impact on the organisation and time-management of the project as sprint 1
                        tasks were completed quickly and additional items from the product backlog
                        could be added into the first sprint, leaving fewer items for the second
                        sprint and more time to be spent on enhancing the product. The full design
                        concept of the web application was developed by Shahmeen, the product owner,
                        who defined the project vision and strategy, and rigorously guided the whole
                        team during the entire process to work in relation to the product concept.
                        Through incorporating scrum each individual was clear of their role at all
                        times and the sprint goal was achieved to an exceptional standard. Positive
                        and negative outcomes were assessed through the sprint review and
                        retrospective which resulted in improved performance during the second sprint
                        and subsequently the production of an excellent final product that surpassed
                        the criteria of the minimum viable product.
                    </p>
                </div>
            </div>
        </main>
    );
}
=======
const Scrum = () =>{
    return(
        <>
        <div className="scrumpage">
        <h2 className="scrumtitle">Using Scrum in Our Project</h2>
        <div className="scrum-main">
                <p className="scrumpara">
                The scrum framework was effectively implemented throughout the build of the
                product for this project. This was led by the scrum master, Emily, who
                conducted daily scrum meetings at 9am where the whole team reviewed the
                progression of the sprint and the allocation of items in the sprint backlog.
                Tasks were split into two five-day sprints which were all displayed on Jira,
                allowing team members to clearly view each item's status and assignee, and
                make changes where necessary. Consistent use of this board had a beneficial
                impact on the organisation and time-management of the project as sprint 1
                tasks were completed quickly and additional items from the product backlog
                could be added into the first sprint, leaving fewer items for the second
                sprint and more time to be spent on enhancing the product. The full design
                concept of the web application was developed by Shahmeen, the product owner,
                who defined the project vision and strategy, and rigorously guided the whole
                team during the entire process to work in relation to the product concept.
                Through incorporating scrum each individual was clear of their role at all
                times and the sprint goal was achieved to an exceptional standard. Positive
                and negative outcomes were assessed through the sprint review and
                retrospective which resulted in improved performance during the second sprint
                and subsequently the production of an excellent final product that surpassed
                the criteria of the minimum viable product.
                </p>

      </div>

<p className="scrumlink">To learn more about scrums <a href="https://www.scrum.org/" target="_blank"> click here!</a></p>
</div>
        
        
        
        </>
    );
};
>>>>>>> cabf70f2ace81d8dd5e2807727bd03befb9bd541

export default Scrum;