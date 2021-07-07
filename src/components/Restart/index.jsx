import styled from "styled-components";

const RestartStyle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  color: #399bf1;
  background-color: #e4e3e3;
  font-size: 32px;
  font-weight: bold;
  border: 2px solid #399bf1;
  cursor: pointer;
  &hover {
  }
`;

export const Restart = ({ setMessage, setTowersDisks }) => {
  return (
    <RestartStyle
      onClick={() => {
        setMessage("");
        setTowersDisks([
          [{ disk: 4 }, { disk: 3 }, { disk: 2 }, { disk: 1 }],
          [],
          [],
        ]);
      }}
    >
      Restart
    </RestartStyle>
  );
};
