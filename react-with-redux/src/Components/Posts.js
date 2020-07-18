import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions/postAction";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <div className="container">
          {this.props.posts.map((post) => (
            <Paper key={post.id} className="card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Paper>
          ))}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  post: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
