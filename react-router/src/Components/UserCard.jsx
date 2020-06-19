import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  width: 500px;
  padding: 0.5rem;
  border-radius: 50px;
  background: #eeeeee;
  box-shadow: 20px 20px 60px #cacaca, -20px -20px 60px #ffffff;
`;

function Item({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    company: {},
  });

  const fetchItem = async () => {
    const person = await fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    );
    const user = await person.json();
    setItem(user);
    console.log(user);
  };

  return (
    <Card>
      <h1>{item.name}</h1>
      <img src="https://source.unsplash.com/user/aiony/200x200" alt="" />
      <h3>Email: {item.email}</h3>
      <h3>Phone: {item.phone}</h3>
      <h3>Website: {item.website}</h3>
      <h4>Company: {item.company.name}</h4>
    </Card>
  );
}

export default Item;
