import styled from 'styled-components'

export const StyledEditEmployee = styled.div`
  width: 400px;
  height: auto;
  padding: 12px;
  color: white;
  background-color: gray;
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const StyledContent = styled.form`
  display: flex;
`

export const StyledContentRow = styled.div`
  border-radius: 5px;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledContentLabel = styled.div`
  border-radius: 5px;
  gap: 10px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;