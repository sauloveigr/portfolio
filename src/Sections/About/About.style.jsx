import styled from "styled-components";
import Astronaut from "../../assets/images/astronaut.png";

export const AboutSection = styled.section`
    max-width: 1440px;
    width: 70vw;
    margin: 0 auto;
`;

const HomeTitle = styled.h1`
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--light-color);
    margin-bottom: 1.125rem;
`;

export const TitleDiv = styled.div`
    width: 15rem;
`;

export const HomeText = styled.p`
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--first-grey);
    width: 14rem;
    margin-bottom: 2.1875rem;
`;

export const WrapperTitle = styled.div`
    height: 13.4375rem;
    width: 20.625rem;
`;

export const WrapperButton = styled.div`
    width: 21rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AboutImage = styled.img.attrs({ src: Astronaut })`
    width: 25rem;
    animation: top-to-bottom 3s ease-in-out forwards infinite alternate;
    z-index: -1;

    @keyframes top-to-bottom {
        0% {
            transform: translateY(0);
        }

        33% {
            transform: translateY(5%);
        }

        66% {
            transform: translateY(0%);
        }

        100% {
            transform: translateY(5%);
        }
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

export default HomeTitle;
