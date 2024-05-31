import React from "react";
import { useState } from "react";
import styled from "styled-components";

const EndText = styled.span`
  &.hidden {
    visibility: hidden;
    position: absolute;
  }
`;
const ShowMoreButton = styled.span`
  color: rgba(5, 66, 44, 1);
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
`;

function ReadMore({ id, text, amountWords = 36 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountWords - 1).join(" ");

  const handleKeyboard = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <p id={id}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <ShowMoreButton>... </ShowMoreButton>}
          <EndText
            className={`${!isExpanded && "hidden"}`}
            aria-hidden={!isExpanded}
          >
            {endText}
          </EndText>
          <ShowMoreButton
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "show less" : "show more"}
          </ShowMoreButton>
        </>
      )}
    </p>
  );
};

export { ReadMore };
