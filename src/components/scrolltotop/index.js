import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Icon from '../icon';

import './scrolltotop.scss';

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleVisibility(state) {
        if (!this.element) return;

        return this.element.setAttribute('aria-hidden', !state);
    }

    get scrollThresholds() {
        const { innerHeight: windowHeight, pageYOffset: scrollOffset } = window,
            { body, documentElement: html } = document,
            pageHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            ),
            top = scrollOffset > 400,
            bottom = windowHeight + scrollOffset < pageHeight - 100;

        return { top, bottom };
    }

    toggleVisibilityOnScroll() {
        const { top, bottom } = this.scrollThresholds;

        if (top && bottom) return this.toggleVisibility(true);

        return this.toggleVisibility(false);
    }

    componentDidMount() {
        window.addEventListener(
            'scroll',
            this.toggleVisibilityOnScroll.bind(this),
            false
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            'scroll',
            this.toggleVisibilityOnScroll.bind(this),
            false
        );
    }

    click() {
        this.element.blur();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    focus() {
        this.toggleVisibility(true);
    }

    blur() {
        this.toggleVisibility(false);
    }

    render() {
        return (
            <button
                className="scroll-to-top"
                onClick={this.click.bind(this)}
                onFocus={this.focus.bind(this)}
                onBlur={this.blur.bind(this)}
                ref={(element) => (this.element = element)}
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
