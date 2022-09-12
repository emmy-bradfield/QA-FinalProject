import { Component } from 'react';
import axios from 'axios';

class discussionBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            movieName: '',
            rating: '',
            message: ''
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.postArray = [];
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeMovieName(e) {
        this.setState({
            movieName: e.target.value,
        })
    }


    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/forum/getAll')
            .then((res) => {
                this.postArray = res.data;
                this.forceUpdate();
                console.log(this.postArray)
            })
            .catch((err) => console.log(err))
    }


    onSubmit(e) {
        e.preventDefault();
        const newPost = {
            name: this.state.name,
            movieName: this.state.movieName,
            rating: this.state.rating,
            message: this.state.message
        }
        console.log("New Post Made")
        axios.post("http://localhost:4000/forum/post", newPost)
            .then(res => console.log("Response from backend"));
        this.setState({
            name: '',
            movieName: '',
            rating: '',
            message: ''
        })
    }

    render() {
        return (
            <>
                <div id='forum_messages'>
                    <ul>
                        {this.postArray.map((post) => (
                            <>
                            <li key={post._id}>{post.name}</li>
                            <li>{post.movieName}</li>
                            <li>{post.rating}</li>
                            <li>{post.message}</li>
                            </>
                        ))}
                    </ul>
                </div>
                <div id='forum_entry'>
                    <form id="forum_form" className="email-form" onSubmit={this.onSubmit}>
                        <div id='entry_left_col'>
                            <label className="form-text">Name:</label>
                            <input className="form-control form-control2" type="text" value={this.state.name} required onChange={this.onChangeName} />
                            <label className="form-text">Movie Name:</label>
                            <input className="form-control form-control2" type="text" value={this.state.movieName} required onChange={this.onChangeMovieName} />
                            <label className="form-text">Rating:</label>
                            <input className="form-control form-control2" type="text" value={this.state.rating} required onChange={this.onChangeRating} />
                        </div>
                        <div id='entry_right_col'>
                            <label className="form-text">Message:</label>
                            <textarea className="form-control form-control2 message-txt" value={this.state.message} required onChange={this.onChangeMessage} />
                            <button className="btn btn-dark" type="submit">Submit Message</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default discussionBoard;