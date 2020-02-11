import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Summary = () => (
    <>
        <h1>Page not found.</h1>
        <p>The page you requested doesn't seem to exist.</p>
    </>
);

const NotFoundPage = () => (
    <Layout summary={Summary}>
        <SEO title="Page Not found" />
        <h2>Things you can do.</h2>
        <ul>
            <li>Double check the URL for any misspellings.</li>
            <li>
                Checkout the sitemap for pages that are similar to what you're
                looking for.
            </li>
            <li>
                If you continue to reach this page, please contact{' '}
                <a href="mailto:jeisner93@gmail.com">jeisner93@gmail.com</a> so
                I can fix the mistake.
            </li>
        </ul>
    </Layout>
);

export default NotFoundPage;
