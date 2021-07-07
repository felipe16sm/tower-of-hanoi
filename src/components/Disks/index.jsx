import styled from "styled-components";

export const DefaultDisk = styled.div`
  height: 50px;
  width: 150px;
  border-radius: 5px;
  background-color: black;
`;

export const Disk1 = styled(DefaultDisk)`
  width: 100px;
  background-color: ${({ selected }) => (selected ? "#008000C0" : "green")};
`;

export const Disk2 = styled(DefaultDisk)`
  width: 150px;
  background-color: ${({ selected }) => (selected ? "#FF0000C0" : "red")};
`;

export const Disk3 = styled(DefaultDisk)`
  width: 200px;
  background-color: ${({ selected }) => (selected ? "#0000FFC0" : "blue")};
`;

export const Disk4 = styled(DefaultDisk)`
  width: 250px;
  background-color: ${({ selected }) => (selected ? "#8c00ffC0" : "#8c00ff")};
`;
