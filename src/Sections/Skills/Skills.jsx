import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import SkillSection, { SkillCardDiv, SkillImage, WrapperSkillCard } from "./Skills.style";

import CSS from "../../assets/icons/skills/css.svg"
import HTML from "../../assets/icons/skills/html.svg"
import JS from "../../assets/icons/skills/js.svg"
import ReactImg from "../../assets/icons/skills/react.svg"

const Skills = () => {
    return (
        <>
            <SkillSection id="skills">
                <SectionTitle>Minhas skills</SectionTitle>
                <WrapperSkillCard>
                    <SkillCard src={HTML}/>
                    <SkillCard src={CSS}/>
                    <SkillCard src={JS}/>
                    <SkillCard src={ReactImg}/>
                </WrapperSkillCard>
            </SkillSection>
        </>
    )
}

export default Skills;

export const SkillCard = (props) => {
    return (
        <>
            <SkillCardDiv>
                <SkillImage src={props.src}/>
            </SkillCardDiv>
        </>
    )
}