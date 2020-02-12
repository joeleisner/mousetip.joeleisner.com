import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Dark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import MouseTip from 'purejs-mousetip';

import '../sass/components/code.sass';

class Code extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        copied: false,
        example: ''
    };

    convertChildrenIntoCodeExample() {
        this.refs.example.innerHTML = this.props.children;

        if (!this.props.mousetip) return;
    
        const mouseTip = new MouseTip(this.props.settings);

        mouseTip.start(Array.from(this.refs.example.querySelectorAll(`[${ mouseTip.selector.full }], [${ mouseTip.selector.short }]`)));
    }

    componentDidMount() {
        if (this.props.example) this.convertChildrenIntoCodeExample();
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
                {example ? <div className="code__example" ref="example"></div> : ''}
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
    language: 'html',
    example: true,
    mousetip: true,
    settings: {}
};

export default Code;
