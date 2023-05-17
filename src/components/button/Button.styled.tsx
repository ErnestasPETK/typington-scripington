import styled from "styled-components";

export const StyledButton = styled.button`

  color:black;
  border-radius:0.3rem;
  font-size:1rem;
  min-height:1.5rem;
  min-width:fit-content;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    background-color: red;
  }
  @media (min-width: 1024px) {
    background-color: green;
  }
  @media (min-width: 1200px) {
    background-color: blue;
  }
`;
export const StyledPrimaryButton = styled(StyledButton)`
  background-color: #8F8F8E;
  
  &:hover{
    background-color: #50C878;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`

background-color:#CCCCC4;

&:hover{
  background-color: #A8E4BC;
}

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;
