import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TOC from '../components/toc';

import '../sass/pages/documentation.sass';

const title = 'Documentation',
    description = 'Everything you need to know for configuring, customizing, and enhancing Pure JS Mousetip to suit your needs.';

const Summary = () => (
    <>
        <h1>{title}</h1>
        <p>{description}</p>
    </>
);

const DocumentationPage = () => (
    <Layout summary={Summary} toc={true}>
        <SEO title={title} description={description} />
        <TOC list={[
            {
                name: 'Global configuration',
                children: [
                    {
                        name: 'Animations',
                        children: [
                            'Duration',
                            'From',
                            'Name',
                            'To',
                            'Timing'
                        ]
                    },
                    'Direction',
                    'HTML',
                    'Message',
                    'Offset',
                    {
                        name: 'Selector',
                        children: [
                            'Full',
                            'Short'
                        ]
                    },
                    'Stylesheet',
                    {
                        name: 'Styles',
                        children: [
                            'Background color',
                            'Border radius',
                            'Color',
                            'Display',
                            'Padding',
                            'position',
                            'Z-index'
                        ]
                    }
                ]
            }
        ]} />
        <h2 id="global-configuration">Global configuration</h2>
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
        <h3 id="animations">Animations</h3>
        <ul className="documentation__definition">
            <li>Key: <code>animations</code></li>
            <li>Type: <code>Boolean</code> or <code>Object</code></li>
            <li>Default: <code>true</code></li>
        </ul>
        <p>Either enables or disables mousetip animations when set to a <code>Boolean</code> or overrides animation defaults when set to an <code>Object</code>.</p>
        <div className="documentation__indent">
            <h4 id="duration">Duration</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.duration</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'.2s'</code></li>
            </ul>
            <p>Sets the duration of mousetip animations.</p>
            <h4 id="from">From</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.from</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'transform:translateY(.5rem);opacity:0;'</code></li>
            </ul>
            <p>Sets the starting point of mousetip animations when created and the default ending point of mousetip animations when deleted.</p>
            <h4 id="name">Name</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.name</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'mouseTipTransition'</code></li>
            </ul>
            <p>Sets the <code>@keyframes</code> name used for mousetip animations.</p>
            <h4 id="to">To</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.to</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'transform:translateY(0);opacity:1;'</code></li>
            </ul>
            <p>Sets the ending point of mousetip animations when created and the default starting point of mousetip animations when deleted.</p>
            <h4 id="timing">Timing</h4>
            <ul className="documentation__definition">
                <li>Key: <code>animations.timing</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'ease-in-out'</code></li>
            </ul>
            <p>Sets the timing function used for mousetip animations.</p>
        </div>
        <Alert>
            <p>The <code>animations.from</code> and <code>animations.to</code> keys are named for their role in mousetip animations when a mousetip is created. When a mousetip is deleted, the animation is played in reverse.</p>
        </Alert>
        <h3 id="direction">Direction</h3>
        <ul className="documentation__definition">
            <li>Key: <code>direction</code></li>
            <li>Type: <code>Array</code></li>
            <li>Default: <code>[ 'bottom', 'right' ]</code></li>
        </ul>
        <p>Sets the direction a mousetip appears relative to the cursor.</p>
        <h3 id="html">HTML</h3>
        <ul className="documentation__definition">
            <li>Key: <code>html</code></li>
            <li>Type: <code>Boolean</code></li>
            <li>Default: <code>true</code></li>
        </ul>
        <p>Enables or disables the ability to put HTML code within a mousetip&rsquo;s message.</p>
        <h3 id="message">Message</h3>
        <ul className="documentation__definition">
            <li>Key: <code>message</code></li>
            <li>Type: <code>String</code></li>
            <li>Default: <code>''</code></li>
        </ul>
        <p>Sets a default message for every mousetip if a local message is not set.</p>
        <h3 id="offset">Offset</h3>
        <ul className="documentation__definition">
            <li>Key: <code>offset</code></li>
            <li>Type: <code>Number</code></li>
            <li>Default: <code>15</code></li>
        </ul>
        <p>Acts as additional pixel spacing for a mousetip&rsquo;s <code>direction</code>.</p>
        <h3 id="selector">Selector</h3>
        <ul className="documentation__definition">
            <li>Key: <code>selector</code></li>
            <li>Type: <code>Object</code> or <code>String</code></li>
            <li>Default: <code>{'{}'}</code></li>
        </ul>
        <p>Either overrides selector defaults when set to an <code>Object</code> or changes the full selector when set to a <code>String</code>.</p>
        <div className="documentation__indent">
            <h4 id="full">Full</h4>
            <ul className="documentation__definition">
                <li>Key: <code>selector.full</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'mousetip'</code></li>
            </ul>
            <p>Sets the full selector.</p>
            <h4 id="short">Short</h4>
            <ul className="documentation__definition">
                <li>Key: <code>selector.short</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'mousetip'</code></li>
            </ul>
            <p>Sets the short selector.</p>
        </div>
        <Alert>
            <p>A selector is the name of an attribute of a target element Pure JS Mousetip looks for to show a mousetip when that element is hovered and the prefix for any local attributes applied to a target element.</p>
        </Alert>
        <h3 id="stylesheet">Stylesheet</h3>
        <ul className="documentation__definition">
            <li>Key: <code>stylesheet</code></li>
            <li>Type: <code>Boolean</code></li>
            <li>Default: <code>false</code></li>
        </ul>
        <p>Declares if a custom stylesheet is being used and not to apply default global styles if <code>true</code>.</p>
        <h3 id="styles">Styles</h3>
        <ul className="documentation__definition">
            <li>Key: <code>styles</code></li>
            <li>Type: <code>Object</code></li>
            <li>Default: <code>{'{}'}</code></li>
        </ul>
        <p>Overrides global style defaults.</p>
        <div className="documentation__indent">
            <h4 id="background-color">Background color</h4>
            <ul className="documentation__definition">
                <li>Key: <code>styles.backgroundColor</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'rgba(0,0,0,.75)'</code></li>
            </ul>
            <p>Sets the global background color for any mousetip.</p>
            <h4 id="border-radius">Border radius</h4>
            <ul className="documentation__definition">
                <li>Key: <code>styles.borderRadius</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'.25rem'</code></li>
            </ul>
            <p>Sets the global border radius for any mousetip.</p>
            <h4 id="color">Color</h4>
            <ul className="documentation__definition">
                <li>Key: <code>styles.color</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'#fff'</code></li>
            </ul>
            <p>Sets the global text color for any mousetip.</p>
            <h4 id="Display">Display</h4>
            <ul className="documentation__definition">
                <li>Key: <code>styles.display</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'inline-block'</code></li>
            </ul>
            <p>Sets the global display property for any mousetip.</p>
            <h4 id="padding">Padding</h4>
            <ul className="documentation__definition">
                <li>Key: <code>styles.padding</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'.75rem 1rem'</code></li>
            </ul>
            <p>Sets the global padding for any mousetip.</p>
            <h4 id="position">Position</h4>
            <ul className="documentation__definition">
                <li>Key: <code>styles.position</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'absolute'</code></li>
            </ul>
            <p>Sets the global position property for any mousetip.</p>
            <h4 id="z-index">Z-index</h4>
            <ul className="documentation__definition">
                <li>Key: <code>styles.zIndex</code></li>
                <li>Type: <code>String</code></li>
                <li>Default: <code>'9999'</code></li>
            </ul>
            <p>Sets the global z-index property for any mousetip.</p>
        </div>
        <Alert>
            <p>All <code>styles</code> settings refer to a CSS property of the same name and are used when creating the CSS that globally styles any mousetip.</p>
        </Alert>
        <h2>Methods</h2>
        <h2>Local attributes</h2>
    </Layout>
);

export default DocumentationPage;
