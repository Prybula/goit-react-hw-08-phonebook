import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px 15px 15px 30px;
  transition: all 0.3s;
  color: #000;
  font-size: 25px;
  font-weight: 600;
  &.active {
    color: tomato;
  }
`;
