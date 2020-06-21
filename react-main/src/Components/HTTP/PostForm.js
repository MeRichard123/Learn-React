import React, { Component } from "react";
import axios from "axios";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div className="container">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="userid">User ID</label>
              <input
                type="text"
                className="form-control"
                id="userid"
                name="userId"
                value={userId}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={title}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <input
                type="text"
                className="form-control"
                id="body"
                name="body"
                value={body}
                onChange={this.changeHandler}
              />
            </div>
            <button
              style={{ marginTop: 10 + "px" }}
              className="btn btn-success"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
