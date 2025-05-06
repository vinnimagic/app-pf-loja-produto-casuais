// Menu.js
import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #ff6347;
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
