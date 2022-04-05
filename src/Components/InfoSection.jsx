import React from "react";
import { WrapperSkillCard } from "../Sections/Skills/Skills.style";
import SectionTitle from "./SectionTitle";

const InfoSection = (title, children) => {
    return (
        <>
            <SectionTitle>{title}</SectionTitle>
            <WrapperSkillCard>{children}</WrapperSkillCard>
        </>
    );
};

export default InfoSection;
