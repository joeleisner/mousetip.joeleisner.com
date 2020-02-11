import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Icon from './icon';

import Logo from '../images/logo.svg';
import Angles from '../images/angles.svg';

import '../sass/components/header.sass';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { open: false };

    toggleNav() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { title, version, navigation, children } = this.props,
            navClasses = ['header__nav', this.state.open ? 'open' : '']
                .filter(Boolean)
                .join(' ');
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header__level-wrapper">
                                <div className="header__level">
                                    <div className="header__brand">
                                        <Logo
                                            className="header__logo"
                                            role="presentation"
                                        />
                                        <div className="header__title-version">
                                            <Link to="/">{title}</Link>
                                            <p>v{version}</p>
                                        </div>
                                        <button
                                            className="header__nav-toggle"
                                            aria-controls="header__nav"
                                            aria-expanded={this.state.open}
                                            aria-label="Toggle navigation"
                                            onClick={this.toggleNav.bind(this)}
                                        >
                                            <Icon
                                                icon={
                                                    this.state.open
                                                        ? faTimes
                                                        : faBars
                                                }
                                            />
                                        </button>
                                    </div>
                                    <nav
                                        id="header__nav"
                                        className={navClasses}
                                    >
                                        {navigation.map(({ path, name }) => (
                                            <Link
                                                to={path}
                                                className="header__nav-link"
                                                activeClassName="header__nav-link--active"
                                                partiallyActive={true}
                                                key={path}
                                            >
                                                {name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 header__summary">{children}</div>
                    </div>
                </div>
                <Angles className="header__angles" role="presentation" />
            </header>
        );
    }
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ''
};

export default Header;
