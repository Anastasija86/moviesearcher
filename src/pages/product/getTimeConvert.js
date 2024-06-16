import PropTypes from "prop-types";

function getTimeConverter(time) {
  let min = time % 60;
  let hours = Math.floor(time / 60);
  return `${hours}h${min}m`;
}

getTimeConverter.propType = {
  time: PropTypes.string,
};

export { getTimeConverter };
