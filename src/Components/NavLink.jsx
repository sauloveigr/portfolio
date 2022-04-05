import styled from "styled-components";

const NavLink = styled.a`
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--light-color);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--first-color);
        transition: 0.3s ease-in-out;
    }
`;

export default NavLink;
