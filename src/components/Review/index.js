import { useEffect, useState } from "react";
import { getReviews } from "apis/movies/index";
import styled from "styled-components";
import { AuthorAvatar } from "components/Review/AuthorAvatar";
import { getCompare } from "./getCompareDate";
import { getDate } from "./getDate";
import { Spinner } from "components/uiPrimitives/Spinner";
import { ReviewTextContainer } from 'components/Review/ReviewTextConteiner';

const Wrapper = styled.section`
  height: 100%;
`;
const ReviewItem = styled.section`
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(244, 244, 244, 1);
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  display: flex;
  overflow: hidden;
`;
const Avatar = styled.div`
  background-color: rgba(242, 246, 244, 1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
  margin-right: 10px;
`;
const PublicDate = styled.p`
  font-size: 0.6rem;
`;


function Reviews() {
  const [reviews, setReviews] = useState({});

  async function getReview(id) {
    await getReviews(id).then((response) => setReviews(response));
  }

  useEffect(() => {
    getReview(157336);
  }, []);

  return (
    <Wrapper>
      {reviews.results ? (
        reviews.results
          .sort(getCompare)
          .map(({ id, author, author_details, content, updated_at }) => (
            <ReviewItem key={id}>
              <Avatar>
                <AuthorAvatar
                  author={author}
                  path={author_details.avatar_path}
                />
                <PublicDate>{getDate(updated_at)}</PublicDate>
              </Avatar>
              <ReviewTextContainer
                id={id}
                author={author}
                rating={author_details.rating}
                content={content}
              />
            </ReviewItem>
          ))
      ) : <Spinner />}
    </Wrapper>
  );
}

export { Reviews };
