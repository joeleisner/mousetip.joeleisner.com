import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Icon from './icon';

import '../sass/components/scrolltotop.sass';

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    state = { visible: false };

    toggleVisibility() {
        const { innerHeight: windowHeight, pageYOffset: scrollOffset } = window,
            { body, documentElement: html } = document,
            pageHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            ),
            fromTopThreshold = scrollOffset > 400,
            fromBottomThreshold =
                windowHeight + scrollOffset < pageHeight - 100;

        if (fromTopThreshold && fromBottomThreshold)
            return this.setState({ visible: true });

        return this.setState({ visible: false });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisibility, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleVisibility, false);
    }

    scroll() {
        this.element.blur();

        if (!('scrollTo' in window)) return window.scroll(0, 0);

        return window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        const classes = [
            'scroll-to-top',
            this.state.visible ? 'scroll-to-top--visible' : ''
        ]
            .filter(Boolean)
            .join(' ');
        return (
            <button
                className={classes}
                onClick={this.scroll}
                ref={element => (this.element = element)}
            >
                <Icon
                    icon={faChevronUp}
                    text="Scroll back to the top of the page"
                />
            </button>
        );
    }
}

export default ScrollToTop;
