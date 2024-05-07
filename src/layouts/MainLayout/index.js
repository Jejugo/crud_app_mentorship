import React from "react";
import styled from "styled-components";

const MainLayoutStyle = styled.section`
  width: 90vw;
  margin: 0 auto;
`;

export default function MainLayout({ children }) {
  return <MainLayoutStyle>{children}</MainLayoutStyle>;
}
