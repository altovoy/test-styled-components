import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  font-size: 30px;
  font-weight: bold;
  height: 50px;
  width: 200px;
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.bg};
  
  &:hover {
      background: ${props => props.theme.fg};
      color: ${props => props.theme.bg};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #4682b4;
`;


export const SecondaryButton = styled(Button)`
  background-color: #C0625E;
`;

Button.defaultProps = {
    theme: {
      main: "palevioletred"
    }
}

export default Button