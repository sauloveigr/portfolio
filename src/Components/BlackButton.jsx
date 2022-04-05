import styled from "styled-components";

const ColorButton = styled.button`
    background-color: transparent;
    border: 1px solid var(--second-grey);
    padding: 0.75rem 1.6875rem;
    color: var(--light-color);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        border: 1px solid transparent;
        box-shadow: 0px 0px 0px 2px var(--first-color);
        transition: 0.3s ease-in-out;
    }
`;

export default ColorButton;
