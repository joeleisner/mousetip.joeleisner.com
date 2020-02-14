import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/definition.sass';

class Definition extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        active: false
    };

    setAttributes(attributes) {
        const keys = Object.keys(attributes);

        keys.forEach(key => this.refs.attributes.innerHTML += `<li>${ key.replace(/^\w/, c => c.toUpperCase()) }: ${ attributes[key] }</li>`);
    }

    setSummary(summary) {
        this.refs.summary.innerHTML = summary;
    }

    setContent() {
        const { attributes, summary } = this.props;

        this.setAttributes(attributes);
        this.setSummary(summary);
    }

    scrollToDefinition() {
        const hash = window.location.hash;

        if (!hash) return;

        const id      = hash.substr(1),
            { title } = this.props;

        if (id === title.toLowerCase()) this.setState({ active: true });
    }

    componentDidMount() {
        this.setContent();
        this.scrollToDefinition();
        window.addEventListener('hashchange', this.scrollToDefinition.bind(this));
    }

    render() {
        const { active }        = this.state,
            { title, children } = this.props;

        return (
            <div className={[ 'definition', active ? 'definition--active' : '' ].filter(Boolean).join(' ')}>
                <h3 id={ title.toLowerCase() } className="definition__title" ref="title">{ title }</h3>
                <ul className="definition__attributes" ref="attributes"></ul>
                <p className="definition__summary" ref="summary"></p>
                { children ? <div className="definition__children">{ children }</div> : '' }
            </div>
        );
    }
}

Definition.propTypes = {
    title: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
    summary: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Definition;
