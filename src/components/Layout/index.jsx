import React from "react";

import Header from "../Header";
import { WrapperLayout } from "./styles";

const Layout = ({ children }) => {
    return (
      <WrapperLayout>
        <Header />
        {children}
      </WrapperLayout>
    );
  };
  
  export default Layout;