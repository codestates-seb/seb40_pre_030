import styled from "styled-components";

export const SProfileBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  row-gap: 10px;
  top: 100%;
  right: 18%;
  width: 180px;
  height: 220px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 5px grey;
  /* overflow-y: scroll; */
  /* overflow-x: scroll; */
`;

export const SImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30px;
`;

export const SUserNameH3 = styled.h3`
  font-weight: revert;
`;
