import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-korocha.png'
import styled from '@emotion/styled'

const Img = styled.img`
    max-width: 335px;
    max-height: 210px;

    &:hover {
        opacity : 0.8;
    }
`;

const A = styled.a`
    position: absolute;
    top: 0px;
    z-index: 1;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    position: relative; 
    padding-left: 1rem;
    padding-right: 1rem; 
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px; 
    background-color: rgba(242,227,201,244);
    height: 95px;

    @media (min-width: 768px) { 
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
    }
`;

const Span = styled.span`
    color: #005826;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-family: Cambria, Helvetica, Arial, sans-serif;
    font-weight: 700;

    &:hover {
        color: #709c74;
    }
`;

const Ul = styled.ul`
    @media (min-width: 768px) { 
        display: flex; 
        position: relative; 
        padding-left: 0.5rem;
        padding-right: 0.5rem; 
        margin-left: 0.5rem; 
    }
`;

function Navbar() {
  return (
    <Nav>
        <NavLink to={"/"}>
            <A href="#">
                <Img src={logo} alt="Logo" />
            </A>
        </NavLink>
        <Ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
            {/* <NavLink to={"/team"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center">
                    <Span>Team</Span>
                </a>
            </li>
            </NavLink> */}
            <NavLink to={"/about"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center">
                    <Span>О нас</Span>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/partners"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center">
                    <Span>Партнерам</Span>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/contact"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center">
                    <Span>Контакты</Span>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/where-to-buy"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center">
                    <Span>Где купить</Span>
                </a>
            </li>
            </NavLink>
        </Ul>
    </Nav>
  )
}

export default Navbar