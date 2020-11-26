import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Tabs, TabList, Tab, TabPanel } from '../components/tabs';

const title = 'Global configuration',
    description = 'Pure JS Mousetip lets you to easily overwrite global settings such as animations, selectors, styles, and more to get things exactly how you want it.';

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
                <Tab>ID</Tab>
                <Tab>Animations</Tab>
                <Tab>Direction</Tab>
                <Tab>HTML</Tab>
                <Tab>Message</Tab>
                <Tab>Offset</Tab>
                <Tab>Selector</Tab>
                <Tab>Stylesheet</Tab>
                <Tab>Styles</Tab>
            </TabList>
            <TabPanel>
                <h2>Usage</h2>
                <p>When initializing Pure JS Mousetip, you can pass in a global configuration object. This object sets global defaults for all mousetips, only superseded by local attributes.</p>
                <Code language="javascript" example={false}>{`const mouseTip = new MouseTip({
    id: 'awesome-mousetip',
    animations: {
        duration: '.5s',
        from: {
            transform: 'translateY(1rem)',
            opacity: 0
        },
        to: {
            transform: 'translateY(-1rem)',
            opacity: 1
        },
        timing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
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
            </TabPanel>
            <TabPanel>
                <h2>ID</h2>
                <Code language="javascript" example={false}>{`{
    id: 'awesome-mousetip'
}`}</Code>
                <h3 class="h5">id</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>null</code></li>
                </ul>
                <p>Sets the ID attribute of every mousetip created by a given instance. If a custom ID is not given, a random ID will be generated on <code>start()</code>.</p>
            </TabPanel>
            <TabPanel>
                <h2>Animations</h2>
                <Code language="javascript" example={false}>{`// Disables animations
{
    animations: false
}

// Overwrites animation defaults
{
    animations: {
        duration: '.5s',
        from: {
            transform: 'translateY(1rem)',
            opacity: 0
        },
        to: {
            transform: 'translateY(-1rem)',
            opacity: 1
        },
        timing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
}`}</Code>
                <h3 className="h5">animations</h3>
                <ul>
                    <li>Type: <code>Boolean | Object</code></li>
                    <li>Default: <code>true</code></li>
                </ul>
                <p>Either enables or disables mousetip animations when set to a <code>Boolean</code> or overwrites animation defaults when set to an <code>Object</code>.</p>
                <ul>
                    <li>Enables mousetip animations when set to <code>true</code></li>
                    <li>Disables mousetip animations when set to <code>false</code></li>
                </ul>
                <h4 className="h5">animations.duration</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'.2s'</code></li>
                </ul>
                <p>Sets the duration of mousetip animations.</p>
                <h4 className="h5">animations.from</h4>
                <ul>
                    <li>Type: <code>Object</code></li>
                    <li>Default: <code>{'{ transform: \'translateY(.5rem)\', opacity: 0 }'}</code></li>
                </ul>
                <p>Sets the starting point of mousetip animations when created and the default ending point of mousetip animations when deleted.</p>
                <h4 className="h5">animations.to</h4>
                <ul>
                    <li>Type: <code>Object</code></li>
                    <li>Default: <code>{'{ transform: \'translateY(0)\', opacity: 1 }'}</code></li>
                </ul>
                <p>Sets the ending point of mousetip animations when created and the default starting point of mousetip animations when deleted.</p>
                <Alert>
                    <p>The <code>animations.from</code> and <code>animations.to</code> keys are named for their role in mousetip animations when a mousetip is created. When a mousetip is deleted, the animation is played in reverse.</p>
                </Alert>
                <h4 className="h5">animations.timing</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'ease-in-out'</code></li>
                </ul>
                <p>Sets the timing function used for mousetip animations.</p>
                <Alert>
                    <p>All custom <code>animations</code> settings refer to a CSS custom property of the same name and are added to an override style tag when creating a mousetip.</p>
                </Alert>
                <Alert type="warning">
                    <p>The <code>animations</code> settings do not not have any defaults. The default values shown are javascript representations of the values found within the default stylesheet.</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>Direction</h2>
                <Code language="javascript" example={false}>{`{
    direction: [ 'top', 'left' ]
}`}</Code>
                <h3 className="h5">direction</h3>
                <ul>
                    <li>Type: <code>Array</code></li>
                    <li>Default: <code>[ 'bottom', 'right' ]</code></li>
                </ul>
                <p>Sets the direction a mousetip appears relative to the cursor.</p>
                <ul>
                    <li>Each item of the array is expected to be a <code>String</code></li>
                    <li>The first item of the array is expected to be <code>top</code>, <code>center</code>, or <code>bottom</code></li>
                    <li>The last item of the array is expected to be <code>left</code>, <code>center</code>, or <code>right</code></li>
                </ul>
                <Alert type="warning">
                    <p>Setting <code>direction</code> to <code>[ 'center', 'center' ]</code> will cause mousetips to interfere with the cursor, breaking proper functionality.</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>HTML</h2>
                <Code language="javascript" example={false}>{`{
    html: false
}`}</Code>
                <h3 className="h5">html</h3>
                <ul>
                    <li>Type: <code>Boolean</code></li>
                    <li>Default: <code>true</code></li>
                </ul>
                <p>Enables or disables the ability to put HTML code within a mousetip&rsquo;s message.</p>
                <ul>
                    <li>Enables the use of HTML code within a mousetip's message when set to <code>true</code></li>
                    <li>Disables the use of HTML code within a mousetip's message when set to <code>false</code></li>
                </ul>
            </TabPanel>
            <TabPanel>
                <h2>Message</h2>
                <Code language="javascript" example={false}>{`{
    message: 'Default message!'
}`}</Code>
                <h3 className="h5">message</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>''</code></li>
                </ul>
                <p>Sets a default message for every mousetip if a message is not set via local attribute.</p>
            </TabPanel>
            <TabPanel>
                <h2>Offset</h2>
                <Code language="javascript" example={false}>{`{
    offset: 20
}`}</Code>
                <h3 className="h5">offset</h3>
                <ul>
                    <li>Type: <code>Number</code></li>
                    <li>Default: <code>15</code></li>
                </ul>
                <p>Acts as additional pixel spacing for a mousetip&rsquo;s <code>direction</code>.</p>
            </TabPanel>
            <TabPanel>
                <h2>Selector</h2>
                <Code language="javascript" example={false}>{`// Sets the full and short selector
{
    selector: {
        full:  'awesome',
        short: 'awe'
    }
}

// Sets the full selector
{
    selector: 'awesome'
}`}</Code>
                <h3 className="h5">selector</h3>
                <ul>
                    <li>Type: <code>Object | String</code></li>
                    <li>Default: <code>{'{}'}</code></li>
                </ul>
                <p>Either overrides selector defaults when set to an <code>Object</code> or changes the full selector when set to a <code>String</code>.</p>
                <h4 className="h5">selector.full</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'mousetip'</code></li>
                </ul>
                <p>Sets the full selector.</p>
                <h4 className="h5">selector.short</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'mt'</code></li>
                </ul>
                <p>Sets the short selector.</p>
                <Alert>
                    <p>A selector is the name of an attribute of a target element Pure JS Mousetip looks for to show a mousetip when that element is hovered and the prefix for any local attributes applied to a target element. It is also used as the class name of the mousetip element if custom stylesheets are enabled.</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>Stylesheet</h2>
                <Code language="javascript" example={false}>{`{
    stylesheet: true
}`}</Code>
                <h3 className="h5">stylesheet</h3>
                <ul>
                    <li>Type: <code>Boolean</code></li>
                    <li>Default: <code>false</code></li>
                </ul>
                <p>Declares if a custom stylesheet is being used and whether or not to apply default global styles.</p>
                <ul>
                    <li>Disables default global styles when set to <code>true</code></li>
                    <li>Enables default global styles when set to <code>false</code></li>
                </ul>
                <Alert>
                    <p>When set to <code>true</code>, the class name of the mousetip element becomes the full selector (default: <code>mousetip</code>).</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2>Styles</h2>
                <Code language="javascript" example={false}>{`{
    styles: {
        backgroundColor: '#000',
        borderRadius:    '.5rem',
        color:           '#f44336',
        display:         'inline-flex',
        padding:         '.25rem .5rem',
        position:        'relative',
        zIndex:          '10000'
    }
}`}</Code>
                <h3 className="h5">styles</h3>
                <ul>
                    <li>Type: <code>Object</code></li>
                    <li>Default: <code>{'{}'}</code></li>
                </ul>
                <p>Overrides global style defaults.</p>
                <h4 className="h5">styles.backgroundColor</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'rgba(0,0,0,.75)'</code></li>
                </ul>
                <p>Sets the global background color for any mousetip.</p>
                <h4 className="h5">styles.borderRadius</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'.25rem'</code></li>
                </ul>
                <p>Sets the global border radius for any mousetip.</p>
                <h4 className="h5">styles.color</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'#fff'</code></li>
                </ul>
                <p>Sets the global text color for any mousetip.</p>
                <h4 className="h5">styles.display</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'inline-block'</code></li>
                </ul>
                <p>Sets the global display property for any mousetip.</p>
                <h4 className="h5">styles.padding</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'.75rem 1rem'</code></li>
                </ul>
                <p>Sets the global padding for any mousetip.</p>
                <h4 className="h5">styles.position</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'absolute'</code></li>
                </ul>
                <p>Sets the global position property for any mousetip.</p>
                <h4 className="h5">styles.zIndex</h4>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'9999'</code></li>
                </ul>
                <p>Sets the global z-index property for any mousetip.</p>
                <Alert>
                    <p>All custom <code>styles</code> settings refer to a CSS custom property of the same name and are added to an override style tag when creating a mousetip.</p>
                </Alert>
                <Alert type="warning">
                    <p>The <code>styles</code> settings do not not have any defaults. The default values shown are javascript representations of the values found within the default stylesheet.</p>
                </Alert>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default ConfigurationPage;
