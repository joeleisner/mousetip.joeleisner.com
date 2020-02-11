import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Dark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        const example = (
            <div
                className="code__example"
                dangerouslySetInnerHTML={{ __html: this.props.children }}
            ></div>
        );

        this.setState({ example });
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
        return (
            <div className="code">
                {example ? this.state.example : ''}
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
    children: PropTypes.string.isRequired
};

Code.defaultProps = {
    language: 'html',
    example: true
};

export default Code;
