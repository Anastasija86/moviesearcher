import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 45px;
  font-size: small;
  font-weight: bold;
  position: absolute;
  bottom: -15px;
  left: 7px;
`;

function ProgressBar({ raiting }) {
  return (
    <Wrapper>
      <CircularProgressbar
        values={[0, 20, 40, 60, 80, 100]}
        value={Math.round(raiting * 10)}
        text={raiting}
        background
        backgroundPadding={6}
        styles={buildStyles({
          textColor: "white",
          textSize: "30px",
          pathColor: "white",
          backgroundColor: "rgba(23, 175, 38, 1)",
          trailColor: "transparent",
        })}
        strokeWidth={7}
      />
    </Wrapper>
  );
}
ProgressBar.propTypes = {
  raiting: PropTypes.string,
};

export { ProgressBar };
