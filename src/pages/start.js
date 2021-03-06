import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import ExternalLink from '../components/externallink';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Tabs, TabList, Tab, TabPanel } from '../components/tabs';

const title = 'Getting started',
    description =
        'Pure JS Mousetip is easy to setup and get the ball rolling. Out of the box, it comes with practical defaults and easy-to-understand configurations, all while providing solid customization down the road.';

const Summary = () => (
    <>
        <h1>{title}</h1>
        <p>{description}</p>
    </>
);

const StartPage = () => (
    <Layout summary={Summary}>
        <SEO title={title} description={description} />
        <Tabs>
            <TabList>
                <Tab>What&rsquo;s a &ldquo;mousetip?&rdquo;</Tab>
                <Tab>Basic setup</Tab>
                <Tab>Advanced setup</Tab>
                <Tab>Accessibility</Tab>
            </TabList>
            <TabPanel>
                <h2>What&rsquo;s a &ldquo;mousetip?&rdquo;</h2>
                <p>Glad you asked! In graphical user interfaces, a tooltip (also referred to as an infotip or hint) is a little dialogue box that will appear when you hover over something with a cursor, often providing more detail or context to what&rsquo;s being hovered. You&rsquo;ve probably seen these everywhere, as they&rsquo;re an effective way of showing information when it visually doesn&rsquo;t make sense for it to be seen at all times. An example of a traditional JS tooltip library is <ExternalLink href="https://popper.js.org/">Popper</ExternalLink>, which is used in <ExternalLink href="https://getbootstrap.com/">Bootstrap</ExternalLink>.</p>
                <p>Pure JS Mousetip is a reimagining of the tooltip paradigm, allowing that little dialogue box to follow the cursor as you move the mouse over an element. This gives the added benefit of ensuring the information is front-and-center and easily visible to a user. To see it in action, hover over the example below:</p>
                <Code mousetip={true}>{`<div mousetip mousetip:message="Test message!">
    <span><strong>mousetip:message</strong>="Test message!"</span>
    <span><strong>mt:m</strong>="Test message!"</span>
</div>`}</Code>
                <Alert type="warning">
                    <p>Pure JS Mousetip only works when using a mouse. If you&rsquo;re viewing this from a smartphone or some tablets, the above example will not work.</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>Basic setup</h2>
                <p>To get started in the most basic way, simply <ExternalLink href="https://github.com/joeleisner/purejs-mousetip/releases" title="Pure JS Mousetip Github releases">download</ExternalLink> and include <code>mousetip.js</code> or <code>mousetip.min.js</code> script at the bottom of your HTML document. Then initialize it by creating a new Mousetip instance, and call <code>.start()</code> on it. That&rsquo;s it!</p>
                <Code example={false}>{`<script src="mousetip.min.js"></script>
<script>
    const mouseTip = new MouseTip();
    mouseTip.start();
</script>`}</Code>
                <p>Once that&rsquo;s done, you can copy and paste the first example into the body of your HTML document to confirm everything&rsquo;s working.</p>
                <Alert type="warning">
                    <p><code>mousetip.js</code> and <code>mousetip.min.js</code> target modern browsers with ES2015+ support. If you need to support older browsers, you should use <code>mousetip.legacy.js</code>, <code>mousetip.legacy.min.js</code>, or simply bundle Pure JS Mousetip into your build system.</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>Advanced setup</h2>
                <p>In addition to the basic setup, Pure JS Mousetip can be pulled into your project as an NPM package. First, ensure you have Pure JS Mousetip installed...</p>
                <Code language={'shell'} example={false}>
                    npm install purejs-mousetip
                </Code>
                <p>... and pull it in where needed!</p>
                <Code language={'javascript'} example={false}>{`// CommonJS/Node.js
const MouseTip = require('purejs-mousetip');

// ES2015 Module
import MouseTip from 'purejs-mousetip';`}</Code>
                <Alert>
                    <p>If you&rsquo;re working with ES2015 modules outside of a Node.js build system, you can always use the module build of <code>mousetip.js</code> (located in <code>/dist/modules</code> of the <code>purejs-mousetip</code> NPM package).</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>Accessibility</h2>
                <p>The default styles and functionality that ships with Pure JS Mousetip take into consideration reduced motion preferences via the <code>prefers-reduced-motion</code> CSS media feature. When a user has opted for reduced motion, the following will happen:</p>
                <ul>
                    <li>The animations of mousetip creation/deletion will become opacity transitions only.</li>
                    <li>Mousetips will no longer follow the mouse. Instead, they appear statically in a position along the edge of its target element that corresponds to the direction globally/locally set.</li>
                </ul>
                <Alert>
                    <p>You can learn more about the <code>prefers-reduced-motion</code> CSS media feature on the <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" title="Mozilla Developer Network web docs, prefers-reduced-motion">Mozilla Developer Network web docs</ExternalLink>.</p>
                </Alert>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default StartPage;
