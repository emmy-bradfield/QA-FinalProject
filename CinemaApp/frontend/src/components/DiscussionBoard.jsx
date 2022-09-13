import { Component } from 'react';
import axios from 'axios';
import { WrapItem } from '@chakra-ui/react';

class DiscussionBoard extends Component {
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
        console.log(this.state.movieName)
        if (this.state.movieName == "") {
            axios.get(`http://localhost:4000/forum/getAll`)
                .then((res) => {
                    this.postArray = res.data;
                    this.forceUpdate();
                    console.log(this.postArray)
                })
                .catch((err) => console.log(err))
        } else {
            axios.get(`http://localhost:4000/forum/get/${this.state.movieName}`)
                .then((res) => {
                    this.postArray = res.data;
                    this.forceUpdate();
                    console.log(this.postArray)
                })
                .catch((err) => console.log(err))
        }
        console.log(this.state.movieName);
    }
    componentDidUpdate() {
        axios.get(`http://localhost:4000/forum/get/${this.state.movieName}`)
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
            .then(res => {
                console.log("Response from backend")
                this.componentDidMount()
            })
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
                    <select id='sort_by_message' className="form-control form-control4" onChange={this.onChangeMovieName}>
                        <option selected disabled hidden value="">Sort By</option>
                        <option>Beauty and the Beef</option>
                        <option>Moonsters Inc</option>
                        <option>Dairy Movie</option>
                        <option>Cowsablanca</option>
                        <option>Terror on the Dairy</option>
                        <option>The Moonions: The Rise of Gru</option>
                        <option>Calftime</option>
                        <option>The Cows</option>
                    </select>
                    <ul class="list-group">
                        {this.postArray.map((post) => (
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">{post.movieName}</div>
                                    {post.message}
                                </div>
                                <span class="badge bg-primary rounded-pill">{post.rating}/10</span>
                            </li>
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

export default DiscussionBoard;