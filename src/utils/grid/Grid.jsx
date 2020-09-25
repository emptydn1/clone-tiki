import styled, { css } from "styled-components";
import * as vars from "../variables/Variables";

const CalGrid = (sizes) =>
  (sizes === "1-2" && `calc((100% - ${vars.GUTTER_HORIZONTAL}) / 2);`) ||
  (sizes === "1-3" && `calc((100% - 2 * ${vars.GUTTER_HORIZONTAL}) / 3);`) ||
  (sizes === "2-3" &&
    `calc(
      2 * ((100% - 2 * ${vars.GUTTER_HORIZONTAL}) / 3) + ${vars.GUTTER_HORIZONTAL}
    );`) ||
  (sizes === "1-4" && `calc((100% - 3 * ${vars.GUTTER_HORIZONTAL}) / 4);`) ||
  (sizes === "2-4" &&
    `calc(
      2 * ((100% - 3 * ${vars.GUTTER_HORIZONTAL}) / 4) + ${vars.GUTTER_HORIZONTAL}
    );`) ||
  (sizes === "3-4" &&
    `calc(
      3 * ((100% - 3 * ${vars.GUTTER_HORIZONTAL}) / 4) + 2 * ${vars.GUTTER_HORIZONTAL}
    );`);

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  max-width: ${vars.GRID_WIDTH};
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: ${vars.GUTTER_VERTICAL};
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  [class^="col-"] {
    float: left;

    &:not(:last-child) {
      margin-right: ${vars.GUTTER_HORIZONTAL};
    }
  }
`;

export const Col = styled.div`
  ${({ center }) => (center ? flexCenter : "")};
  width: ${({ size }) => CalGrid(size)};
  background-color: red;
`;
