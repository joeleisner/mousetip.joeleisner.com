import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark as Dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import MouseTip from 'purejs-mousetip';

import './code.scss';

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.example = React.createRef();
    }

    state = {
        copied: false,
    };

    convertChildrenIntoCodeExample() {
        this.example.current.innerHTML = this.props.children;

        if (!this.props.mousetip) return;
    
        const mouseTip = new MouseTip(this.props.settings),
            targets    = this.example.current.querySelectorAll(`[${ mouseTip.selector.full }], [${ mouseTip.selector.short }]`);

        mouseTip.start(targets);

        this.mousetip = mouseTip;
    }

    componentDidMount() {
        if (this.props.example) this.convertChildrenIntoCodeExample();
    }

    stopMousetip() {
        if (!this.mousetip) return;

        const { css, overrides } = this.mousetip;

        if (css) css.unuse();

        if (overrides) overrides.parentNode.removeChild(overrides);

        this.mousetip.stop();
    }

    componentWillUnmount() {
        if (this.props.mousetip) this.stopMousetip();
    }

    onCopy() {
        const { copied } = this.state;
        this.setState({ copied: !copied });
        setTimeout(() => this.setState({ copied }), 2000);
    }

    render() {
        const { language, example, children, ...props } = this.props;

        delete props.mousetip;
        delete props.settings;

        return (
            <div className="code">
                {example ? <div className="code__example" ref={this.example}></div> : ''}
                <div className="code__snippet">
                    <CopyToClipboard
                        text={children}
                        onCopy={this.onCopy.bind(this)}
                    >
                        <button className="code__copy">
                            {this.state.copied ? 'Copied' : 'Copy'}
                        </button>
                    </CopyToClipboard>
                    <SyntaxHighlighter
                        className="code__syntax"
                        language={language}
                        style={Dark}
                        customStyle={{ padding: '1rem' }}
                        {...props}
                    >
                        {children}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

Code.propTypes = {
    language: PropTypes.string,
    example: PropTypes.bool,
    mousetip: PropTypes.bool,
    settings: PropTypes.object,
    children: PropTypes.string.isRequired
};

Code.defaultProps = {
    language: 'xml',
    example: true,
    mousetip: false,
    settings: {}
};

export default Code;
