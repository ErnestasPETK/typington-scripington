import Button from "../components/button/Button";
import { StyledNavbar } from "./Navbar.styled.tsx";

type NavbarProps = {
    authenticated?: boolean
}

const Navbar = ({ authenticated }: NavbarProps): JSX.Element => {

    return (
        <StyledNavbar>

            <Button type="primary" text="Log in" />
            <Button type="secondary" text="Register" />
        </StyledNavbar>
    )
}

export default Navbar;