import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
`;

export default function Flex({
  children,
  direction = "row",
  alignItems,
  justifyContent,
  gap,
}) {
  return (
    <StyledFlex
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
    >
      {children}
    </StyledFlex>
  );
}
