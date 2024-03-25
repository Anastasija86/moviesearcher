import React from "react";
import PropTypes from 'prop-types';
import person from 'assets/person-svgrepo-com.svg';


export default function Image({ src='person', alt, classname }) {
    return <img src={src} alt={alt} className={classname} />;
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    classname: PropTypes.string,
}

Image.defaultProps = {
    src: {person}
}