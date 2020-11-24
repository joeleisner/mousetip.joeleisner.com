import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, text, ...props }) => {
    const hiddenText = text ? <span className="sr">{text}</span> : '';
    return (
        <>
            <FontAwesomeIcon icon={icon} {...props} role="presentation" />
            {hiddenText}
        </>
    );
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string
};

export default Icon;
