import styled from "styled-components";
import PropTypes from "prop-types";


const ItemList = styled.ul`
  display: flex;
  padding-bottom: 60px;
  overflow-x: auto;
  padding-inline-start: 0;
`;
const ItemContainer = styled.li`
  list-style: none;
  display: block;
  margin: 5px 10px;
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 1);
  border: 1px solid rgba(244, 244, 244, 1);
  padding-bottom: 10px;
  overflow: hidden;
  min-width: 140px;
  width: 140px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
const ActorName = styled.p`
  font-size: small;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
const ActorRole = styled(ActorName)`
  font-weight: normal;
`;

function ActorListItem({actors}) {
    return (
        <ItemList>
          {actors?.cast?.map(({ id, profile_path, name, character }) =>
              profile_path ? (
                <ItemContainer key={id}>
                  <ItemImg
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt="Actor"
                  />
                  <ActorName>{name}</ActorName>
                  <ActorRole>{character}</ActorRole>
                </ItemContainer>
              ) : null
            )}
        </ItemList>
    )
};

ActorListItem.propType = {
  actors: PropTypes.array
};

export { ActorListItem };