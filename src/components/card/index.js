import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';

import './card.scss';

const Card = ({ icon, title, children, ...props }) => {
    function createTitle(icon, title) {
        if (!icon && !title) return '';

        let className = ['card__title'];

        if (icon && !title) className.push('card__title--only-icon');

        if (!icon && title) className.push('card__title--only-heading');

        return (
            <div className={className.join(' ')}>
                {icon ? <Icon icon={icon} className="card__icon"></Icon> : ''}
                {title ? <h2 className="card__heading">{title}</h2> : ''}
            </div>
        );
    }

    return (
        <div className="card" {...props}>
            {createTitle(icon, title)}
            <div className="card__description">{children}</div>
        </div>
    );
};

Card.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Card;
