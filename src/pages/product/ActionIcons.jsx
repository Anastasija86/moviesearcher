import React, { useState } from "react";
import styled from "styled-components";
import { GenreList } from "pages/product/Genres";
import { ProgressBar } from "pages/product/ProgressScoreIcon";
import { Tooltip } from "react-tooltip";
import { BsFillHeartFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";
import { Button } from "components/uiPrimitives/Button";
import { FaPlay } from "react-icons/fa";
import { Trailer } from "components/Trailer";

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
  &:hover,
  &:focus,
  &.active {
    background-color: rgba(23, 175, 38, 1);
    color: white;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5),
      0 0 25px rgba(0, 0, 0, 0.5);
  }
`;
const Icon = styled(FaPlay)`
  margin-right: 5px;
`;
const PlayButton = styled(Button)`
  width: 8rem;
  margin-left: 2rem;
  &:hover,
  &:focus,
  &.active {
    background-color: rgba(23, 175, 38, 1);
    color: white;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5),
      0 0 25px rgba(0, 0, 0, 0.5);
  }
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
function ActionIcons({ raiting }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <ProgressBar raiting={raiting} />
      {ActionIconsList.map((item, index) => (
        <IconContainer key={index} id={`icon-${index}`}>
          {item.icon}
          <Tooltip anchorSelect={`#icon-${index}`} content={item.name} />
        </IconContainer>
      ))}
      <PlayButton onClick={handleClick}>
        <Icon />
        <>Trailer</>
      </PlayButton>
      {isOpen && <Trailer handleClick={handleClick} />}
    </Wrapper>
  );
}

ActionIcons.propTypes = {
  raiting: PropTypes.number,
};

export { ActionIcons };
