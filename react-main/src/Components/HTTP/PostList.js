import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  padding: 4rem 2.5rem;
  margin: 0 auto;
  background: #7acc6c;
  color: white;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  margin: 10px 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 20px 0;
`;

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error getting data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <Title>List of Posts</Title>
        <CardContainer>
          {posts.length
            ? posts.map((post) => (
                <Card>
                  <h6 key={post.id}>{post.title}</h6>
                </Card>
              ))
            : null}
          {errorMsg ? <div>{errorMsg}</div> : null}
        </CardContainer>
      </div>
    );
  }
}

export default PostList;
