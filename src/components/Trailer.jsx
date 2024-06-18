import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { getVideosById } from "apis/movies/index";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 60%);
  z-index: 100089;
  display: flex;
`;
const HeadLine = styled.div`
  color: white;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
`;
const VideoContainer = styled.div`
  position: fixed;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 840px;
  background-color: black;
`;
const Title = styled.h1`
  margin: 15px;
`;

const OnCloseButton = styled.div`
  cursor: pointer;
  margin: 10px;
  &:hover,
  &:focus,
  &.active {
    color: white;
    background-color: grey;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5),
      0 0 25px rgba(0, 0, 0, 0.5);
  }
`;

function Trailer({ handleClick }) {
  const params = useParams();
  const movieId = params.productId;
  const [videos, setVideos] = useState([]);
  async function getVideos() {
    try {
      const response = await getVideosById(movieId);
      if (response && response.results) {
        setVideos(response.results);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      setVideos([]);
    }
  }

  useEffect(() => {
    getVideos(movieId);
  }, [movieId]);

  const trailerVideo =
    videos.length > 0
      ? videos.find((video) => video.name.includes("Trailer"))
      : null;
  const videoId = trailerVideo ? trailerVideo.key : null;

  return (
    <Wrapper>
      <VideoContainer>
        <HeadLine>
          <Title>Trailer</Title>
          <OnCloseButton onClick={handleClick}>
            <IoCloseSharp color="white" />
          </OnCloseButton>
        </HeadLine>
        <ReactPlayer
          light
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="840px"
          height="540px"
          playing
          controls
        />
      </VideoContainer>
    </Wrapper>
  );
}

Trailer.propTypes = {
  handleClick: PropTypes.func,
};
export { Trailer };
