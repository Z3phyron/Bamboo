import React from "react";
import styled from "styled-components";

const Lay = styled.div`

`;

const MainLayOut = (props) => {
  return <Lay>{props.children}</Lay>;
};

export default MainLayOut;
