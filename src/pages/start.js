import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import ExternalLink from '../components/externallink';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
        <h2>What&rsquo;s a &ldquo;mousetip?&rdquo;</h2>
        <p>Glad you asked! In graphical user interfaces, a tooltip (also referred to as an infotip or hint) is a little dialogue box that will appear when you hover over something with a cursor, often providing more detail or context to what&rsquo;s being hovered. You&rsquo;ve probably seen these everywhere, as they&rsquo;re an effective way of showing information when it visually doesn&rsquo;t make sense for it to be seen at all times. An example of a traditional JS tooltip library is <ExternalLink href="https://popper.js.org/">Popper</ExternalLink>, which is used in <ExternalLink href="https://getbootstrap.com/">Bootstrap</ExternalLink>.</p>
        <p>Pure JS Mousetip is a reimagining of the tooltip paradigm, allowing that little dialogue box to follow the cursor as you move the mouse over an element. This gives the added benefit of ensuring the information is front-and-center and easily visible to a user. To see it in action, hover over the example below:</p>
        <Code>{`<div mousetip mousetip:message="Test message!">
    <span><strong>mousetip:message</strong>="Test message!"</span>
</div>`}</Code>
        <Alert type="warning">
            <p>Pure JS Mousetip only works when using a mouse, so if you&rsquo;re viewing this from a smartphone or some tablets, the above example will not work as touch support is not yet an added feature.</p>
        </Alert>
        <h2>Basic setup</h2>
        <p>To get started in the most basic way, simply include <code>mousetip.js</code> or <code>mousetip.min.js</code> script at the bottom of your HTML document. Then initialize it by creating a new Mousetip instance, and call <code>.start()</code> on it. That&rsquo;s it!</p>
        <Code example={false}>{`<script src="mousetip.min.js"></script>
<script>
    const mouseTip = new MouseTip();
    mouseTip.start();
</script>`}</Code>
        <p>Once that&rsquo;s done, you can copy and paste the first example into the body of your HTML document to confirm everything&rsquo;s working.</p>
        <Alert type="warning">
            <p><code>mousetip.js</code> and <code>mousetip.min.js</code> target modern browsers with ES2015+ support. If you need to support older browsers, you should use <code>mousetip.legacy.js</code>, <code>mousetip.legacy.min.js</code>, or simply bundle Pure JS Mousetip into your build system.</p>
        </Alert>
        <h2>Advanced setup</h2>
        <p>In addition to the basic setup, Pure JS Mousetip can be pulled into your project as a Node.js module. First, ensure you have Pure JS Mousetip installed as an NPM package within your project:</p>
        <Code language={'shell'} example={false}>
            npm install purejs-mousetip
        </Code>
        <p>Then simply require it to get the ball rolling!</p>
        <Code language={'javascript'} example={false}>{`const MouseTip = require('purejs-mousetip');

const mouseTip = new MouseTip();
mouseTip.start();`}</Code>
        <p>You can also import it as an ES2015 module like so:</p>
        <Code language={'javascript'} example={false}>{`import MouseTip from 'purejs-mousetip';

const mouseTip = new MouseTip();
mouseTip.start();`}</Code>
        <Alert>
            <p>If you&rsquo;re working with ES2015 modules outside of a Node.js build system, you can always use the module build of <code>mousetip.js</code> (located in <code>/dist/modules</code> of the <code>purejs-mousetip</code> NPM package).</p>
        </Alert>
    </Layout>
);

export default StartPage;
