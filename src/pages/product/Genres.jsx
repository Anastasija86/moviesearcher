import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getTimeConverter } from './getTimeConvert';

const GenreList = styled.div`
  display: flex;
  align-items: center;
`;
const Wrapper = styled(GenreList)`
  vertical-align: middle;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
const Dot = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  background-color: #262626;
  width: 5px;
  height: 5px;
  border-radius: 50px;
`;

function Genres({genres, runtime}) {
    return (
      <Wrapper>
        {genres &&
          genres.map(({ name }) => (
            <GenreList key={name}>
              <p>{name}</p>
              <Dot></Dot>
            </GenreList>
          ))}
        {runtime && <p>{getTimeConverter(runtime)}</p>}
      </Wrapper>
    );
};
Genres.propType = {
  genres: PropTypes.array,
  runtime: PropTypes.number
};

export { Genres, GenreList };