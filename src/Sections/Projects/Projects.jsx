import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import {
    CardDiv,
    ContainerCards,
    LinkCard,
    ProjectCardSubtitle,
    ProjectCardTitle,
    ProjectSection,
    TitleVersion,
    WrapperCard,
    WrapperTitle,
} from "./Projects.style";

import Project1 from "../../assets/images/site-1.png";
import Project2 from "../../assets/images/site-2.png";
import Project3 from "../../assets/images/site-3.png";
import Project4 from "../../assets/images/site-4.png";
import Project5 from "../../assets/images/site-5.png";
import Project6 from "../../assets/images/site-6.png";

const Projects = () => {
    return (
        <>
            <ProjectSection id="projects">
                <SectionTitle>Projetos</SectionTitle>
                <ContainerCards>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/form/"
                    >
                        <ProjectCard
                            fontSize=".75rem"
                            title="Form"
                            subtitle="React JS, styled-components, Material UI, Formik, Yup"
                            src={Project6}
                            version="(Responsivo)"
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/rocket-nft-react/"
                    >
                        <ProjectCard
                            fontSize=".8rem"
                            title="Rocket NFT"
                            subtitle="React JS, styled-components e react-scroll"
                            src={Project5}
                            version="(Desktop)"
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/landing-page-react"
                    >
                        <ProjectCard
                            fontSize=".8rem"
                            title="Figma Land"
                            subtitle="React JS, styled-components e react-router-dom"
                            src={Project1}
                            version="(Desktop)"
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/studio-ghibli-react/"
                    >
                        <ProjectCard
                            title="Studio Ghibli"
                            fontSize="0.875rem"
                            subtitle="React JS e styled-components"
                            src={Project4}
                            version="(Responsivo)"
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/landing-page-challenge/"
                    >
                        <ProjectCard
                            fontSize="0.875rem"
                            title="Rachi"
                            subtitle="React JS e styled-components"
                            src={Project2}
                            version="(Desktop)"
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/rocket-coffee-react/"
                    >
                        <ProjectCard
                            fontSize="0.875rem"
                            title="Rocket Coffee"
                            subtitle="React JS e styled-components"
                            src={Project3}
                            version="(Responsivo)"
                        />
                    </LinkCard>


                </ContainerCards>
            </ProjectSection>
        </>
    );
};

export default Projects;

export const ProjectCard = ({ src, title, subtitle, fontSize, version }) => {
    return (
        <>
            <WrapperCard>
                <CardDiv src={src} />
                <WrapperTitle>
                    <ProjectCardTitle>{title}</ProjectCardTitle>
                    <TitleVersion>{version}</TitleVersion>
                </WrapperTitle>
                <ProjectCardSubtitle fontSize={fontSize}>
                    {subtitle}
                </ProjectCardSubtitle>
            </WrapperCard>
        </>
    );
};
