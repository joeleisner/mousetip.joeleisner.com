import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/toc.sass';

class TOC extends React.Component {
    constructor(props) {
        super(props);
    }

    createLink(item) {
        const hash = `#${ item.toLowerCase().replace(' ', '-') }`;
        return <a href={ hash }>{ item }</a>;
    }

    createList(item) {
        if (typeof item === 'string') return <li key={item}>{ this.createLink(item) }</li>;

        const { name, children } = item;

        return (
            <li key={name}>
                { this.createLink(name) }
                <ol>{ children.map(this.createList.bind(this)) }</ol>
            </li>
        );
    }

    render() {
        const { title, list } = this.props;
        return (
            <div className="toc">
                <h2 className="toc__title">{ title }</h2>
                { list.length ? <ol className="toc__list">{ list.map(this.createList.bind(this)) }</ol> : '' }
            </div>
        );
    }
}

TOC.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array.isRequired
};

TOC.defaultProps = {
    title: 'Table of contents',
    list: []
};

export default TOC;