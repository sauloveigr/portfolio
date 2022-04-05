import React from "react";
import { FooterComponent, FooterText, TextSpan } from "./Footer.style";

const Footer = () => {
    return (
        <>
            <FooterComponent>
                <FooterText>Desenvolvedor: <TextSpan>Saulo Veiga</TextSpan> - Designer: <TextSpan>Iuri Silva</TextSpan></FooterText>
            </FooterComponent>
        </>
    )
};

export default Footer;