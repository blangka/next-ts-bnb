import styled, { css } from "styled-components";
import palette from "./palette";

const Container1 = styled.div`
  width: 100%;
  padding: 0 80px;

  h2 {
    width: 557px;
    margin: 80px 0 60px;
    font-size: 50px;
    color: ${palette.cardinal};
  }
`;

const Container2 = styled.div`
  width: 100%;
  padding: 0 80px;

  h2 {
    width: 557px;
    margin: 80px 0 60px;
    font-size: 50px;
    color: ${palette.black};
  }
`;

const commonStyle = { Container1, Container2 };

export default commonStyle;
