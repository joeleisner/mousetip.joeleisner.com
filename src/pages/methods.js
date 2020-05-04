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
                <Tab>Start</Tab>
                <Tab>Stop</Tab>
            </TabList>
            <TabPanel>
                <h2>Usage</h2>
                <p>After initializing Pure JS Mousetip, you have two methods at your disposal to start/stop its functionality.</p>
                <Code language="javascript" example={false}>{`// Once Pure JS Mousetip is initialized...
const mouseTip = new MouseTip();
// ... you can start...
mouseTip.start();
// ... and stop it whenever you want
mouseTip.stop();`}</Code>
            </TabPanel>
            <TabPanel>
                <h2>Start</h2>
                <Code language="javascript" example={false}>{`// Start by querying all mousetips in the document automatically
mouseTip.start();

// Start by passing in the elements manually
const elements = document.querySelectorAll('mousetip, mt');
mouseTip.start(elements);`}</Code>
                <h3 className="h5">start</h3>
                <ul>
                    <li>Arguments: <code>Yes</code>
                        <ul>
                            <li><strong>elements</strong>: <code>NodeList</code> (optional)</li>
                        </ul>
                    </li>
                </ul>
                <p>Starts Pure JS Mousetip's functionality. If <code>elements</code> are not passed to the method, the instance will <code>document.querySelectorAll</code> elements that match the full/short selectors.</p>
                <Alert>
                    Passing elements into the start method manually is great for when access to the DOM is tricky, such as using Pure JS Mousetip in tandem with React (like this site).
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>Stop</h2>
                <Code language="javascript" example={false}>{'mouseTip.stop();'}</Code>
                <h3 className="h5">stop</h3>
                <ul>
                    <li>Arguments: <code>No</code></li>
                </ul>
                <p>Stops Pure JS Mousetip's functionality</p>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default ConfigurationPage;
