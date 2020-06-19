import React, { Component } from "react";

// Each time you need to handle a form elements such as an input need:
// - A value equal to this.prop.value
// - A onChange attribute equal to the handle function onChange={this.handleClick}
// - Make a method for onChange and set the state

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `User:${this.state.username}Comment:${this.state.comments}Topic:${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <h1 className="title">React Forms</h1>
        <div className="container">
          <div className="form-group">
            <label htmlFor="user">Username:</label>
            <input
              type="text"
              name="user"
              id="user"
              className="form-control"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              className="form-control"
              value={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <select
              id="topic"
              value={topic}
              onChange={this.handleTopicChange}
              className="form-control"
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
