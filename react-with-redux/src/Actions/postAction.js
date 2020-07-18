import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      const posts = res.data;
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createPost = (postData) => (dispatch) => {
  axios
    .post("http://jsonplaceholder.typicode.com/posts", postData)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: NEW_POST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
