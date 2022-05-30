import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
top: 0;
z-index: 99;
position: fixed;
height: 80px;
filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.281));
border-bottom: 1px solid white;
color: white;
display: flex;
justify-content: space-between;
width: 90%;
padding-bottom: 10px;
`

export const NavContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`

export const NavLinks = styled.ul`
display: flex;
align-items: flex-end;
width: 100%;
max-width: 500px;
gap: 8%;
`

export const NavLink = styled(Link)`
font-size: 1.5rem;
color: white;
cursor: pointer;
text-decoration: none;
display: flex;

min-width: 80px;
max-height: 30px;
`


export const Logo = styled.h1`
font-size:2rem;
display: flex;
align-items: flex-end;
margin: 0 3rem;
`
