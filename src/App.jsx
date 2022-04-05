import GlobalStyle from "./globalStyles.js";
import React from "react";
import Header from "./Components/Header.jsx";
import TitleHeader from "./Components/TitleHeader.jsx";
import NavBar from "./Components/NavBar.jsx";
import NavLink from "./Components/NavLink.jsx";
import About from "./Sections/About/About.jsx";
import Projects from "./Sections/Projects/Projects.jsx";
import Services from "./Sections/Services/Services.jsx";
import Skills from "./Sections/Skills/Skills.jsx";
import Footer from "./Sections/Footer/Footer.jsx";

import { Link } from "react-scroll";

function App() {
    return (
        <>
            <GlobalStyle />

            <Header>
                <TitleHeader>Portfólio</TitleHeader>
                <NavBar>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-300}
                        duration={500}
                    >
                        <NavLink>Início</NavLink>
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={300}
                        duration={500}
                    >
                        <NavLink>Sobre mim</NavLink>
                    </Link>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                    >
                        <NavLink>Projetos</NavLink>
                    </Link>

                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <NavLink>Serviços</NavLink>
                    </Link>

                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <NavLink>Minhas skills</NavLink>
                    </Link>
                </NavBar>
            </Header>

            <About />
            <Projects />
            <Services />
            <Skills />
            <Footer />
        </>
    );
}

export default App;
