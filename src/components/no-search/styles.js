import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.regular};
  h1 {
    font-weight: bold;
    font-size: 32px;
  }
`;