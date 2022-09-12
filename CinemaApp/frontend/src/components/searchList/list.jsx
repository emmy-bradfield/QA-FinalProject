import { Link } from 'react-router-dom';

const List = ({ list }) => {
    return (
        <div className="stack">
            {list.map(item => (
                <ul className="no-bullet center-list stack">
                    <li key={item._id} className="stack">
                        <div className="lil-spread">
                            <div>
                                {item.name}
                                <br />
                                <h6> Directed by {item.director}</h6>
                            </div>
                            <div>
                                {item.rating}
                                <i class="fa-solid fa-star"></i>
                                <br />
                                <h6>{item.reviews} reviews</h6>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h6 className="movie-link">
                            <Link to={item.page}>More info...</Link>
                        </h6>
                    </li>
                </ul >
            ))
            }
        </div >
    )
}

export default List;