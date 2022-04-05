import styled from "styled-components";

const ColorButton = styled.a`
    background-color: var(--first-color);
    border: none;
    padding: 0.75rem 1.6875rem;
    color: var(--light-color);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 0px 2px var(--light-color);
        transition: 0.3s ease-in-out;
    }
`;

export default ColorButton;
