import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Tabs, TabList, Tab, TabPanel } from '../components/tabs';

const title = 'Methods',
    description = 'Pure JS Mousetip includes methods to start and stop its functionality, giving you full controll over the library within your project.';

const Summary = () => (
    <>
        <h1>{title}</h1>
        <p>{description}</p>
    </>
);

const ConfigurationPage = () => (
    <Layout summary={Summary} toc={true}>
        <SEO title={title} description={description} />
        <Tabs>
            <TabList>
                <Tab>Usage</Tab>
            </TabList>
            <TabPanel>
                <h2>Usage</h2>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default ConfigurationPage;
