import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const Navigation = styled.div`
    background-color: hsl(217, 28%, 15%);
`;

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 4rem 2rem;

    @media only screen and (max-width: 520px) {
        padding: 2rem 1.5rem;
    }
`;

const Logo = styled.img`
    height: 2.5rem;
    cursor: pointer;

    @media only screen and (max-width: 520px) {
        height: 1.8rem;
    }
`;

const MenuItemContainer = styled.ul`
    display: flex;

    list-style: none;
`;

const MenuItem = styled.li`
    text-decoration: none;
    cursor: pointer;
    margin-left: 3rem;
    text-transform: capitalize;
    transition: 0.2s ease-in-out;

    &:hover {
        color: rgb(101, 226, 217);
    }

    @media only screen and (max-width: 520px) {
        margin-left: 1.8rem;
        font-size: 0.8rem;
    }
`;

const Nav = () => {
    return (
        <Navigation>
            <NavContainer className='container'>
                <Logo src={logo} alt='logo' />
                <MenuItemContainer>
                    <MenuItem href='#'>features</MenuItem>

                    <MenuItem href='#'>team</MenuItem>

                    <MenuItem href='#'>sign in</MenuItem>
                </MenuItemContainer>
            </NavContainer>
        </Navigation>
    );
};

export default Nav;
