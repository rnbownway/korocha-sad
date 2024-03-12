import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Down = styled.div`
    background-color: #005826;
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
`;

const Text = styled.span`
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    color: #fafaf4;
`;

const Links = styled.div`
    display: flex;
    gap: 30px;
`;

const TextLink = styled.span`
    font-family: "Cambria", Helvetica, Arial, sans-serif;
    color: #fafaf4;
    &:hover {
        opacity: 0.8;
    }
`;

const Footer = () => {
    return (
        <Down>
            <Links>
                <NavLink to={"/contact"}>
                    <a href="#">
                        <TextLink>Связаться с нами</TextLink>
                    </a>
                </NavLink>
                <NavLink to={"/partners"}>
                    <a href="#">
                        <TextLink>Скачать договор</TextLink>
                    </a>
                </NavLink>
            </Links>
            <Text>© Корочанские сады 2024. Все Права Защищены.</Text>
        </Down>
    )
};

export default Footer;