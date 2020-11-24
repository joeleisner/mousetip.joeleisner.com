import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children, ...props }) => {
    let properties = props;

    properties['aria-label'] = properties['aria-label'] || properties.title;
    properties.title = properties.title || properties['aria-label'];

    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            {...properties}
        >
            {children}
        </a>
    );
};

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ExternalLink;
