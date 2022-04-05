import styled from "styled-components";

const Header = styled.header.attrs({className: 'header'})`
    padding: 2.1875rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 1rem;
    position: sticky;
    top: 0;
    background-color: var(--third-grey);
`;

export default Header;