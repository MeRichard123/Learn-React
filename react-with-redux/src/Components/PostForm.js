import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../Actions/postAction";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="" className="form" onSubmit={this.handleSubmit}>
          <TextField
            id="standard-basic"
            label="Title:"
            onChange={this.onChange}
            name="title"
            value={this.state.title}
          />
          <TextField
            id="standard-basic"
            label="Body:"
            multiline
            name="body"
            margin="normal"
            onChange={this.onChange}
            value={this.state.body}
          />
          <Button type="submit" variant="outlined" style={{ margin: "10px" }}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
