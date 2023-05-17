import { StyledPrimaryButton, StyledSecondaryButton } from "./Button.styled";

type ButtonProps = {
    type: "primary" | "secondary",
    text?: string

}


const Button = ({ type, text }: ButtonProps): JSX.Element => {

    const buttonType = type;
    const buttonText = text;
    switch (buttonType) {
        case "primary":
            return <StyledPrimaryButton>{buttonText ? buttonText : "SUBMIT"}</StyledPrimaryButton>
        case "secondary":
            return <StyledSecondaryButton> {buttonText ? buttonText : "SUBMIT"} </StyledSecondaryButton>
        default:
            return <StyledSecondaryButton> SUBMIT </StyledSecondaryButton>
    }

}


export default Button;