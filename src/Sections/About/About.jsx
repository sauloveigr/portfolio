import React from "react";
import ColorButton from "../../Components/ColorButton";
import BlackButton from "../../Components/BlackButton.jsx";
import HomeTitle, {
    AboutContainer,
    AboutImage,
    AboutSection,
    HomeText,
    TitleDiv,
    WrapperButton,
    WrapperTitle,
} from "./About.style.jsx";
import {
    AboutText,
    AboutTextDiv,
    ContainerAboutText,
} from "./About.text.style";

import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import { SocialCard, ContainerSocial } from "./About.social.syle";
import SectionTitle from "../../Components/SectionTitle";

const About = () => {
    return (
        <>
            <AboutSection id="about">
                <TitleContainer />
                <TextContainer />
            </AboutSection>
        </>
    );
};

export default About;

export const TitleContainer = () => {
    return (
        <>
            <AboutContainer>
                <WrapperTitle>
                    <TitleDiv>
                        <HomeTitle>Olá, eu sou o Saulo Veiga :)</HomeTitle>
                    </TitleDiv>
                    <HomeText>Desenvolvedor Front-End</HomeText>
                    <WrapperButton>
                        <ColorButton
                            target="_blank"
                            href="https://github.com/sauloveigr/curriculum/blob/main/Curr%C3%ADculo%20-%20Saulo%20Veiga.pdf"
                        >
                            Download CV
                        </ColorButton>
                        <BlackButton>Entrar em contato</BlackButton>
                    </WrapperButton>
                </WrapperTitle>
                <AboutImage />
            </AboutContainer>
        </>
    );
};

export const TextContainer = () => {
    return (
        <>
            <ContainerAboutText>
                <SectionTitle>Sobre mim</SectionTitle>
                <AboutTextDiv>
                    <AboutText>
                        Sou Saulo, tenho 24 anos. Estudante de front-end.
                        Apaixonado por tecnologia e programação. Tento estudar
                        todos os dias desde que conheci esse ramo que me dá
                        tanto prazer. Estou disposto a aprender tudo o que for
                        preciso para evoluir como profissional e ao mesmo tempo,
                        oferecer meu esforço e dedicação à empresa que irei
                        atuar.
                    </AboutText>
                </AboutTextDiv>
                <ContainerSocial>
                    <SocialCard
                        href="https://www.linkedin.com/in/sauloveigr/"
                        title="Linkedin"
                        subtitle="/sauloveigr"
                        src={Linkedin}
                    />
                    <SocialCard
                        href="https://github.com/sauloveigr"
                        title="Github"
                        subtitle="/sauloveigr"
                        src={Github}
                    />
                    <SocialCard
                        title="Contato"
                        subtitle="(85) 9 9656-7235"
                        src={Phone}
                    />
                    <SocialCard
                        title="Mail"
                        subtitle="sauloveigr@hotmail.com"
                        src={Mail}
                    />
                </ContainerSocial>
            </ContainerAboutText>
        </>
    );
};
