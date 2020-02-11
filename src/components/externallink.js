import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children, ...props }) => {
    if (props.title && !props['aria-label']) props['aria-label'] = props.title;
    if (!props.title && props['aria-label']) props.title = props['aria-label'];
    return (
        <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
            {children}
        </a>
    );
};

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ExternalLink;
