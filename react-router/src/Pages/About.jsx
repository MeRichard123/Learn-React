import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopLink = styled.li`
  font-size: 1.5rem;
  margin-top: 10px;
  :hover {
    text-decoration: underline;
  }
`;
const Card = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  width: 500px;
  padding: 0.5rem;
  border-radius: 50px;
  background: #eeeeee;
  box-shadow: 20px 20px 60px #cacaca, -20px -20px 60px #ffffff;
`;
function About() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    setItems(items);
  };

  const LinkReset = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <Card>
      <h1>About Our Team</h1>
      <ul>
        {items.map((item) => (
          <ShopLink key={item.id}>
            <Link style={LinkReset} to={`/about/${item.id}`}>
              {item.name}
            </Link>
          </ShopLink>
        ))}
      </ul>
    </Card>
  );
}

export default About;
