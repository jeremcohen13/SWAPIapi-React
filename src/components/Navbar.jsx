import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu inverted borderless>
      <Link to="/Home">
        <Menu.Item name="Home" style={{ color: "##ffe81f" }}></Menu.Item>
      </Link>
      <Link to="/People">
        <Menu.Item name="People"></Menu.Item>
      </Link>
      <Link to="/Planets">
        <Menu.Item name="Planets"></Menu.Item>
      </Link>
      <Link to="/Starships">
        <Menu.Item name="Starships"></Menu.Item>
      </Link>
      <Link to="/Search">
        <Menu.Item name="Search"></Menu.Item>
      </Link>
    </Menu>
  );
}
