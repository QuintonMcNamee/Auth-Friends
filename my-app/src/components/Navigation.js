import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin: 10px auto;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/friends'>Friends</Link>
    </StyledNav>
  )
}

export default Navigation;
