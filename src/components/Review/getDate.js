import PropTypes from "prop-types";

const getDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear();
  const formatDate = `${day}.${month}.${year}`;
  return formatDate;
};

getDate.propType = {
  dateString: PropTypes.string,
};

export { getDate };
