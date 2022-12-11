import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const ContainerSpaceBetween = styled(Container)`
  justify-content: space-between; !important
`;

export const ContainerColumn = styled(Container)`
  flex-direction: column;
`;
