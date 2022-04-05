import styled from "styled-components";

const SkillSection = styled.section`
    max-width: 1440px;
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 11.5625rem;
`;

export const SkillCardDiv = styled.div`
    width: 9.375rem;
    height: 9.375rem;
    border: 1px solid var(--second-grey);
    background-color: var(--fourth-grey);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperSkillCard = styled.div`
    gap: 3.1875rem;
    display: flex;
    justify-content: space-between;
`;

export const SkillImage = styled.img.attrs((props) => ({ src: props.src }))``;

export default SkillSection;
