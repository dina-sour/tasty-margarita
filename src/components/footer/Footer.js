import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <p>Made with love by <a href="https://github.com/dina-sour">Dina Matveev</a></p>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: #efefef;
    text-align: center;
    text-decoration: none;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.2em;
    box-sizing: border-box;
    align-self: flex-end;
    width:100%;
`;

export default Footer;