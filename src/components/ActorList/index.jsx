import React from "react";
import { getActorList } from "apis/movies/index";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Spinner } from "components/uiPrimitives/Spinner";
import { ActorList } from "components/ActorList/ActorListItem";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  overflow-x: auto;
`;

function Actors() {
  const param = useParams();
  const movieId = param.productId;

  const [actors, setActors] = useState({});

  async function getActors(id) {
    await getActorList(id).then((response) => setActors(response));
  }
  useEffect(() => {
    getActors(movieId);
  }, []);

  return (
    <Wrapper>
      {actors?.cast ? <ActorList actors={actors.cast} /> : <Spinner />}
    </Wrapper>
  );
}

export { Actors };
