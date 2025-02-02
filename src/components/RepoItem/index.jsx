import React from "react";
import { Wrapper, WrapperTitle, WrapperFullName, WrapperLink } from "./styles";

const RepoItem = ({ name, linkToRepo, fullName }) => {
  return (
    <Wrapper>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>full name:</WrapperFullName>
      <WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </WrapperLink>
    </Wrapper>
  );
};

export default RepoItem;