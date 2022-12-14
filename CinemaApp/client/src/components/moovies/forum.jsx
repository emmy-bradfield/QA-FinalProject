import { Component } from 'react';
import axios from 'axios';

class DiscussionBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: '',
            name: '',
            movieName: '',
            rating: '',
            message: '',
            replies: [],
            postArray: [],
            reply: ''
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeReplies = this.onChangeReplies.bind(this);
        this.addReply = this.addReply.bind(this);
        this.onChangeReply = this.onChangeReply.bind(this);
        this.replySetup = this.replySetup.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeMovieName(e) {
        if (e.target.value == "") {
            this.componentDidMount();
        } else {
            this.setState({
                movieName: e.target.value,
            })
        }
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

    onChangeReply(e) {
        this.setState({
            reply: e.target.value
        })
    }

    onChangeReplies(e) {
        this.setState({
            replies: e.target.value
        })
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/forum/getAll`)
            .then((res) => {
                this.setState({
                    postArray: res.data
                })
            })
            .catch((err) => console.log(err))

    }
    componentDidUpdate() {
        if (this.state.movieName !== "") {
            axios.get(`http://localhost:4000/forum/get/${this.state.movieName}`)
                .then((res) => {
                    this.setState({
                        postArray: res.data
                    })
                })
                .catch((err) => console.log(err))
        }
    }
    addReply(e) {
        const thisID = e.target.parentNode.previousSibling.previousSibling.previousSibling.
            previousElementSibling.innerText
        const thisObjectId = this.state.postArray[thisID]._id;
        axios.post(`http://localhost:4000/forum/reply/${thisObjectId}`, {reply: this.state.reply})
            .then(res => {
                console.log(res.data)
            })
    }

    replySetup(e) {
        console.log((this.state.postArray[1].replies))
        e.target.hidden = true;
        e.target.nextSibling.hidden = false;
        e.target.parentNode.nextSibling.hidden = false;
    }
    refreshPage() {
        window.location.reload(false);
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
            })
    }

    render() {
        return (
            <>
                <div id='forum_messages'>
                    <div id='two_buttons'>
                        <select id='sort_by_message' className="form-control form-control4" onChange={this.onChangeMovieName}>
                            <option selected value="">Sort By</option>
                            <option>Beauty and the Beef</option>
                            <option>Moonsters Inc</option>
                            <option>Dairy Movie</option>
                            <option>Cowsablanca</option>
                            <option>Terror on the Dairy</option>
                            <option>The Moonions: The Rise of Gru</option>
                            <option>Calftime</option>
                            <option>The Cows</option>
                        </select>
                        <button className='btn btn-dark' onClick={this.refreshPage}>Remove Filter</button>
                    </div>
                    <ul className="list-group">
                        {this.state.postArray.map((post, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                <div id='outer_div' className="ms-2 me-auto forum-div">
                                    <div id='hideThis' hidden>{index}</div>
                                    <div className="fw-bold">{post.movieName}</div>
                                    <div id='content'>
                                        {post.message}
                                        {(this.state.postArray[index].replies).map((eachreply, index) => (
                                            <li id='replies' className='reply'>
                                                {eachreply}
                                            </li>
                                        ))}
                                    </div>
                                    <div id='replyDiv'>
                                        <button id='replyBtn' onClick={this.replySetup} className='btn btn-dark'>Reply</button>
                                        <textarea id='replyBox' hidden className="form-control form-control2 message-txt" value={this.state.reply} required onChange={this.onChangeReply} />
                                    </div>
                                    <div id='sendReply' hidden>
                                        <button id='replyBtn' onClick={this.addReply} className='btn btn-dark'>Send reply</button>
                                    </div>
                                </div>
                                <span id='rating' className="rounded-pill">{post.rating}/10</span>
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
                            <textarea className="form-control form-control2 message-txt" onChange={this.onChangeMessage} value={this.state.message} required />
                            <button className="btn btn-dark" type="submit">Submit Message</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default DiscussionBoard;