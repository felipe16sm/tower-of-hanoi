import styled from "styled-components";

const MessageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  height: 100px;
  font-size: 32px;
  font-weight: bold;
  color: darkcyan;
`;

export const Message = ({ message }) => {
  return <MessageStyle>{message}</MessageStyle>;
};
