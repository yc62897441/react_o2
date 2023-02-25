import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarWrapper = styled.nav`
    width: 100%;
    border: 1px solid black;

    a {
        margin: 10px;
        text-decoration: none;
        color: navy;
        font-weight: 400;
        font-size: 20px;
    }
`

function Navbar() {
    return (
        <NavbarWrapper>
            <Link to="/">Home</Link>
            <Link to="/json">TestJson</Link>
            <Link to="/img">TestImg</Link>
        </NavbarWrapper>
    )
}

export default Navbar
