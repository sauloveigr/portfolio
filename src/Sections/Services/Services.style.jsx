import styled from "styled-components";

const ServiceSection = styled.section`
    max-width: 1440px;
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 7.9375rem;
`;

export const ServiceCardDiv = styled.div`
    width: 21.875rem;
    height: 15rem;
    border: 1px solid #333333;
    border-bottom: 5px solid var(--first-color);
    background-color: var(--fourth-grey);
    padding: 2.75rem 1.875rem;
`;

export const ServiceIcon = styled.img.attrs((props) => ({ src: props.src }))`
    margin-bottom: 1.375rem;
`;

export const ServiceTitle = styled.h2`
    font-size: 2rem;
    color: var(--first-grey);
    font-weight: 500;
`;

export const TitleDiv = styled.div`
    width: ${(props) => props.width};
`;

export const WrapperServiceCards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.875rem;
`;

export default ServiceSection;
