import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import MouseTip from 'purejs-mousetip';

import './card.scss';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.card = React.createRef();
    }

    createTitle(icon, title) {
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

    mousetip() {
        const settings = typeof this.props.mousetip === 'boolean' ? {} : this.props.mousetip;
        const mouseTip = new MouseTip(settings);

        mouseTip.start([this.card.current]);
    }

    componentDidMount() {
        if (this.props.mousetip) this.mousetip();
    }

    render() {
        const { icon, title, children, ...props } = this.props;

        return (
            <div className="card" {...props} ref={this.card}>
                {this.createTitle(icon, title)}
                <div className="card__description">{children}</div>
            </div>
        );
    }
}

Card.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    mousetip: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    children: PropTypes.node.isRequired
};

Card.defaultProps = {
    mousetip: false
};

export default Card;
