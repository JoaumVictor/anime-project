import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid black;
  background-color: rgb(88, 88, 88);
  border-radius: 16px;
  text-align: center;
  color: white;
  display: flex;
  margin: 10px;
  align-items: center;
  transition: 0.3s;
  padding: 25px;
  min-height: 65vh;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  width: 18%;

  h3 {
    background-color: transparent;
  }

  img {
    border-radius: 16px;
    margin: 10px 0px;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-15px);
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: space-evenly;
  flex-flow: row wrap;

  p {
  background-color: transparent;
  margin: 0px 30px;
  }
`;