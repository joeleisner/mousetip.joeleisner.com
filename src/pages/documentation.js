import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import Definition from '../components/definition';
import Layout from '../components/layout';
import SEO from '../components/seo';

const title = 'Documentation',
    description = 'Everything you need to know for configuring, customizing, and enhancing Pure JS Mousetip to suit your needs.';

const Summary = () => (
    <>
        <h1>{title}</h1>
        <p>{description}</p>
    </>
);

const DocumentationPage = () => (
    <Layout summary={Summary}>
        <SEO title={title} description={description} />
        <a href="#animations">Animations</a>
        <h2>Global configuration</h2>
        <p>When initializing Pure JS Mousetip, you can pass in a global configuration object. This object sets global defaults for all mousetips, only superseded by local attributes.</p>
        <Code language="javascript" example={false}>{`const mouseTip = new MouseTip({
    animations: {
        duration: '.5s',
        from:     'transform:translateY(1rem);opacity:0;',
        name:     'awesomeTransition',
        to:       'transform:translateY(-1rem);opacity:1;',
        timing:   'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    },
    direction: [ 'top', 'left' ],
    html:      false,
    message:   'Default message!',
    offset:    20,
    selector: {
        full:  'awesome',
        short: 'awe'
    },
    stylesheet: true,
    styles: {
        backgroundColor: '#000',
        borderRadius:    '.5rem',
        color:           '#f44336',
        display:         'inline-flex',
        padding:         '.25rem .5rem',
        position:        'relative',
        zIndex:          '10000'
    }
});`}</Code>
        <Definition
            title="Animations"
            attributes={{
                key:     '<code>animations</code>',
                type:    '<code>Boolean</code> or <code>Object</code>',
                default: '<code>true</code>'
            }}
            summary="Either enables or disables mousetip animations when set to a <code>Boolean</code> or overrides animation defaults when set to an <code>Object</code>."></Definition>
        <h3 id="animations">Animations</h3>
        <ul className="documentation__definition">
            <li>Key: <code>animations</code></li>
            <li>Type: <code>Boolean</code> or <code>Object</code></li>
            <li>Default: <code>true</code></li>
        </ul>
        <p>Either enables or disables mousetip animations when set to a <code>Boolean</code> or overrides animation defaults when set to an <code>Object</code>.</p>
        <div className="documentation__indent">
            <h4>Duration</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.duration</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'.2s'</code></li>
            </ul>
            <p>Overrides the default duration of mousetip animations.</p>
            <h4>From</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.from</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'transform:translateY(.5rem);opacity:0;'</code></li>
            </ul>
            <p>Overrides the default starting point of mousetip animations when created and the default ending point of mousetip animations when deleted.</p>
            <h4>Name</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.name</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'mouseTipTransition'</code></li>
            </ul>
            <p>Overrides the default <code>@keyframes</code> name used for mousetip animations.</p>
            <h4>To</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.to</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'transform:translateY(0);opacity:1;'</code></li>
            </ul>
            <p>Overrides the default ending point of mousetip animations when created and the default starting point of mousetip animations when deleted.</p>
            <h4>Timing</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.timing</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'ease-in-out'</code></li>
            </ul>
            <p>Overrides the default timing function used for mousetip animations.</p>
        </div>
        <Alert>
            <p>The <code>animations.from</code> and <code>animations.to</code> keys are named for their role in mousetip animations when a mousetip is created. When a mousetip is deleted, the animation is played in reverse.</p>
        </Alert>
        <h3>Direction</h3>
        <ul className="documentation__definition">
            <li>Key: <code>direction</code></li>
            <li>Type: <code>Array</code></li>
            <li>Default: <code>[ 'bottom', 'right' ]</code></li>
        </ul>
        <p>Overrides the default direction the mousetip appears relative to the cursor.</p>
        <h3>HTML</h3>
        <ul className="documentation__definition">
            <li>Key: <code>html</code></li>
            <li>Type: <code>Boolean</code></li>
            <li>Default: <code>true</code></li>
        </ul>
        <p>Enables or disables the ability to put HTML code within a mousetip&rsquo;s message.</p>
        <h3>Message</h3>
        <ul className="documentation__definition">
            <li>Key: <code>message</code></li>
            <li>Type: <code>String</code></li>
            <li>Default: <code>''</code></li>
        </ul>
        <p>Sets a default message for every mousetip if a local message is not set.</p>
        <h2>Methods</h2>
        <h2>Local attributes</h2>
    </Layout>
);

export default DocumentationPage;
