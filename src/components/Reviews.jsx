import { useEffect, useState } from "react";
import getReviews from "api/GetReviews";
import styled from "styled-components";
import { ImStarFull } from "react-icons/im";
import ReadMore from "components/ReadMore";
import { Oval } from "react-loader-spinner";


const Wrapper = styled.section`
  height: 100%;
`;
const Container = styled.section`
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
`;
const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const AuthorAvatar = styled.div`
  margin-right: 10px;
`;
const Title = styled.h3`
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 10px;
  color: rgba(5, 66, 44, 1);
`;
const PublicDate = styled.p`
  font-size: 0.6rem;
`;
const ContentContainer = styled.div`
  font-size: 0.8rem;
  color: #161616;
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
const DefaultImg = styled.div`
  background-color: ${props => props.color};
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export default function Reviews() {
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    getReviews(157336).then((response) => setReviews(response));
  }, []);

  // assigning a random avatar color to the review author if there is no picture
  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };

  // publication date conversion
  const getpublicationDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const year = date.getFullYear();
    const formatDate = `${day}.${month}.${year}`;
    return formatDate;
  };
  // sort reviews by publication date
  const getCompare = (a, b) => {
    const dateA = new Date(a.updated_at);
    const dateB = new Date(b.updated_at);
    return dateB - dateA;
  };

  return (
    <Wrapper>
      {reviews.results ? (
        reviews.results
          .sort(getCompare)
          .map(({ id, author, author_details, content, updated_at }) => (
            <Container key={id}>
              <AuthorAvatar>
                <Avatar>
                  {author_details.avatar_path ? (
                    <AvatarImg
                      src={`https://image.tmdb.org/t/p/w500${author_details.avatar_path}`}
                      alt="Autor avatar"
                    />
                  ) : (
                    <DefaultImg color={randomHexColorCode()}>
                      {author[0].toUpperCase()}
                    </DefaultImg>
                  )}
                </Avatar>
                <PublicDate>{getpublicationDate(updated_at)}</PublicDate>
              </AuthorAvatar>
              <ContentContainer>
                <TitleContainer>
                  <Title>{author}</Title>
                  {author_details.rating && (
                    <Raiting>
                      <Star>
                        <ImStarFull color={"gold"} />
                      </Star>
                      {author_details.rating}
                    </Raiting>
                  )}
                </TitleContainer>
                <ReadMore id={id} text={content}></ReadMore>
              </ContentContainer>
            </Container>
          ))
      ) : (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </Wrapper>
  );
}
