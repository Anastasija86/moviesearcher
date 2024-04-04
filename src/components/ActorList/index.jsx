import React from "react";
import { getActorList } from "apis/movies/index";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Spinner } from 'components/uiPrimitives/Spinner';
import {ActorListItem} from 'components/ActorList/ActorListItem'

const Wrapper = styled.div`
  overflow-x: auto;
`;

function ActorsList() {
  const [actors, setActors] = useState({});

  async function getActors(id) {
    await getActorList(id).then((response) => setActors(response));
  }
  useEffect(() => {
    getActors(157336);
  }, []);

  return (
    <Wrapper>
      {actors ? <ActorListItem actors={ actors} /> : <Spinner/>}
    </Wrapper>
  );
}

export { ActorsList };
