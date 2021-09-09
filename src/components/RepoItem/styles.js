import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
`;

export const WrapperTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const WrapperLink = styled.a`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: ${(props) => props.theme.colors.secondary};
`;
