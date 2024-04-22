import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


// Membuat komponen navigasi dengan styled-components
const Nav = styled.nav`
  float: right;
  margin-right: 70px;
  color: black;
`;

// Membuat komponen tautan navigasi dengan styled-components
const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin-right: 10px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

// Menyusun tautan-tautan navigasi dalam elemen navigasi
const Navigation = (
    <Nav>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Contact</NavLink>
    </Nav>
)

const navigasi = <nav>home</nav>
ReactDOM.render(Navigation, document.getElementById("nav"));

const paragraf = <h1>BOOTCAMP Batch 8 : Experiement with REACTJS!</h1>
ReactDOM.render(paragraf, document.getElementById("paragraf"));

const element = <p>This is React</p>
ReactDOM.render(element, document.getElementById("root"));



