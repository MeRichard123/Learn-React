import React, { useState, useEffect } from "react";
import axios from "axios";

// Fetching Data with useState

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : `POST TITLE: ${post.title}`}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
