import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 45px;
  font-size: small;
  font-weight: bold;
`;

function ProgressBar({raiting}) {
  return (
    <Wrapper>
      <CircularProgressbar
        values={[0, 20, 40, 60, 80, 100]}
        value={Math.round(raiting * 10)}
        text={`${Math.round(raiting * 10)}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          textColor: "white",
          pathColor: "white",
          backgroundColor: "rgba(23, 175, 38, 1)",
          trailColor: "transparent",
        })}
        strokeWidth={9}
      />
      <p>User score</p>
    </Wrapper>
  );
};

ProgressBar.propType = {
    raiting: PropTypes.number,
};
 export { ProgressBar };
