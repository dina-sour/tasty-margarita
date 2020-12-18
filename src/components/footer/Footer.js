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
    width: 100%;
    text-align: center;
    text-decoration: none;
`;

export default Footer;