import { ReadMore } from "components/Review/ReadMore";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ImStarFull } from "react-icons/im";

const TextContainer = styled.div`
  font-size: 0.8rem;
  color: #161616;
`;
const Title = styled.h3`
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 10px;
  color: rgba(5, 66, 44, 1);
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Raiting = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: rgba(5, 66, 44, 1);
  background-color: rgba(242, 246, 244, 1);
  width: 50px;
  height: 15px;
  border-radius: 25px;
  padding: 5px;
`;
const Star = styled.span`
  margin-right: 8px;
`;

function ReviewTextContainer({ id, author, rating, content }) {
  return (
    <TextContainer>
      <TitleContainer>
        <Title>{author}</Title>
        {rating && (
          <Raiting>
            <Star>
              <ImStarFull color={"gold"} />
            </Star>
            {rating}
          </Raiting>
        )}
      </TitleContainer>
      <ReadMore id={id} text={content}></ReadMore>
    </TextContainer>
  );
};

ReviewTextContainer.propType = {
  id: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  content: PropTypes.string,
};

export { ReviewTextContainer };
