import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
          POKéDEX
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
background-color: #419EAE;
color: white;
font-size: 210%;
font-weight: bold;
font-family: Abel, sans-serif;
letter-spacing: 0.1em;
width: 100%;
padding: 1%;
`;

export default Header;