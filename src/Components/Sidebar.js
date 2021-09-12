import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({navToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
        width: 20%;
        overflow: hidden;
        font-size: medium;
    }
`;

export default Sidebar;
