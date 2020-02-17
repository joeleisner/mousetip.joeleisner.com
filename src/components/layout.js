import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import ScrollToTop from './scrolltotop';

import '../sass/components/layout.sass';

const generateTOCList = element => {

    const { children, id } = element.props;

    console.log(element, children, id);

    // console.log(element);
    // if (![ 'h2', 'h3', 'h4' ].includes(element.type)) return;
    // if (!element.props.id) return;

    // // if (element.type !== 'h2') {
    // //     const parentIndex = toc.length - 1,
    // //         parent        = toc[parentIndex];
    // //     if (typeof parent === 'string') toc[parentIndex] = { name: parent, children: [] };
    // //     toc[parentIndex].children.push(element.id);
    // //     return element;
    // // }

    // console.log(element.id);

    return element.props.id;
};

const includeTOC = children => {
    const toc = React.Children.map(children, generateTOCList);
    console.log(toc);
    return (
        children
    );
};

const Layout = ({ summary, toc, children }) => {
    const data = useStaticQuery(graphql`
            query DataQuery {
                site {
                    siteMetadata {
                        title
                        version
                        navigation {
                            name
                            path
                        }
                    }
                }
            }
        `),
        { title, version, navigation } = data.site.siteMetadata;

    return (
        <div className="site">
            <Header title={title} version={version} navigation={navigation}>
                {typeof summary === 'function' ? summary() : summary}
            </Header>
            <div className="site__content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <main>
                                { toc ? includeTOC(children) : children }
                                <ScrollToTop />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    summary: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]).isRequired,
    toc: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Layout.defaultProps = {
    toc: false
};

export default Layout;
