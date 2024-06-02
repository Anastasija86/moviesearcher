import React from "react";
import styled from "styled-components";
import { GenreList } from "pages/product/Genres";
import { ProgressBar } from "pages/product/ProgressScoreIcon";
import { Tooltip } from "react-tooltip";
import { BsFillHeartFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Wrapper = styled(GenreList)`
  margin-bottom: 45px;
  size: 18px;
`;
const IconContainer = styled.div`
  background-color: rgba(23, 175, 38, 1);
  border-radius: 50%;
  padding: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  color: white;
`;

const ActionIconsList = [
  {
    name: "Mark as favorite",
    icon: <BsFillHeartFill />,
  },
  {
    name: "Add to watchlist",
    icon: <FaList />,
  },
  {
    name: "Rate",
    icon: <AiFillStar />,
  },
];

function ActionIcons({raiting}) {
    return (
      <Wrapper>
        <ProgressBar raiting={raiting} />
        {ActionIconsList.map((item, index) => (
          <IconContainer key={index} id={`icon-${index}`}>
            {item.icon}
            <Tooltip anchorSelect={`#icon-${index}`} content={item.name} />
          </IconContainer>
        ))}
      </Wrapper>
    );
}

ActionIcons.propTypes = {
  raiting: PropTypes.number,
};

export { ActionIcons };