import React from 'react';
import PropTypes from 'prop-types';
import {
    faInfoCircle,
    faExclamationCircle,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import Icon from './icon';

import '../sass/components/alert.sass';

const icons = {
    info: faInfoCircle,
    warning: faExclamationCircle,
    danger: faExclamationCircle,
    success: faCheckCircle
};

const Alert = ({ type, children }) => {
    const icon = icons[type];
    return (
        <aside className="alert">
            <div className={`alert__icon alert__icon--${type}`}>
                <Icon icon={icon} />
            </div>
            <div className="alert__content">{children}</div>
        </aside>
    );
};

Alert.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired
};

Alert.defaultProps = {
    type: 'info'
};

export default Alert;
