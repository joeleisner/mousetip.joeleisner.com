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
            </TabPanel>
            <TabPanel>
                <h2 className="h5">animations</h2>
                <ul>
                    <li>Type: <code>Boolean | Object</code></li>
                    <li>Default: <code>true</code></li>
                </ul>
                <p>Either enables or disables mousetip animations when set to a <code>Boolean</code> or overrides animation defaults when set to an <code>Object</code>.</p>
                <h3 className="h5">animations.duration</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'.2s'</code></li>
                </ul>
                <p>Sets the duration of mousetip animations.</p>
                <h3 className="h5">animations.from</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'transform:translateY(.5rem);opacity:0;'</code></li>
                </ul>
                <p>Sets the starting point of mousetip animations when created and the default ending point of mousetip animations when deleted.</p>
                <h3 className="h5">animations.name</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'mouseTipTransition'</code></li>
                </ul>
                <p>Sets the <code>@keyframes</code> name used for mousetip animations.</p>
                <h3 className="h5">animations.to</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'transform:translateY(0);opacity:1;'</code></li>
                </ul>
                <p>Sets the ending point of mousetip animations when created and the default starting point of mousetip animations when deleted.</p>
                <h3 className="h5">animations.timing</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'ease-in-out'</code></li>
                </ul>
                <p>Sets the timing function used for mousetip animations.</p>
                <Alert>
                    <p>The <code>animations.from</code> and <code>animations.to</code> keys are named for their role in mousetip animations when a mousetip is created. When a mousetip is deleted, the animation is played in reverse.</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2 className="h5">direction</h2>
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
                <h2 className="h5">html</h2>
                <ul>
                    <li>Type: <code>Boolean</code></li>
                    <li>Default: <code>true</code></li>
                </ul>
                <p>Enables or disables the ability to put HTML code within a mousetip&rsquo;s message.</p>
            </TabPanel>
            <TabPanel>
                <h2 className="h5">message</h2>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>''</code></li>
                </ul>
                <p>Sets a default message for every mousetip if a local message is not set.</p>
            </TabPanel>
            <TabPanel>
                <h2 className="h5">offset</h2>
                <ul>
                    <li>Type: <code>Number</code></li>
                    <li>Default: <code>15</code></li>
                </ul>
                <p>Acts as additional pixel spacing for a mousetip&rsquo;s <code>direction</code>.</p>
            </TabPanel>
            <TabPanel>
                <h2 className="h5">selector</h2>
                <ul>
                    <li>Type: <code>Object | String</code></li>
                    <li>Default: <code>{'{}'}</code></li>
                </ul>
                <p>Either overrides selector defaults when set to an <code>Object</code> or changes the full selector when set to a <code>String</code>.</p>
                <h3 className="h5">selector.full</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'mousetip'</code></li>
                </ul>
                <p>Sets the full selector.</p>
                <h3 className="h5">selector.short</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'mt'</code></li>
                </ul>
                <p>Sets the short selector.</p>
                <Alert>
                    <p>A selector is the name of an attribute of a target element Pure JS Mousetip looks for to show a mousetip when that element is hovered and the prefix for any local attributes applied to a target element.</p>
                </Alert>
            </TabPanel>
            <TabPanel>
                <h2 className="h5">stylesheet</h2>
                <ul>
                    <li>Type: <code>Boolean</code></li>
                    <li>Default: <code>false</code></li>
                </ul>
                <p>Declares if a custom stylesheet is being used and not to apply default global styles if <code>true</code>.</p>
            </TabPanel>
            <TabPanel>
                <h2 className="h5">styles</h2>
                <ul>
                    <li>Type: <code>Object</code></li>
                    <li>Default: <code>{'{}'}</code></li>
                </ul>
                <p>Overrides global style defaults.</p>
                <h3 className="h5">styles.backgroundColor</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'rgba(0,0,0,.75)'</code></li>
                </ul>
                <p>Sets the global background color for any mousetip.</p>
                <h3 className="h5">styles.borderRadius</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'.25rem'</code></li>
                </ul>
                <p>Sets the global border radius for any mousetip.</p>
                <h3 className="h5">styles.color</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'#fff'</code></li>
                </ul>
                <p>Sets the global text color for any mousetip.</p>
                <h3 className="h5">styles.display</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'inline-block'</code></li>
                </ul>
                <p>Sets the global display property for any mousetip.</p>
                <h3 className="h5">styles.padding</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'.75rem 1rem'</code></li>
                </ul>
                <p>Sets the global padding for any mousetip.</p>
                <h3 className="h5">styles.position</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'absolute'</code></li>
                </ul>
                <p>Sets the global position property for any mousetip.</p>
                <h3 className="h5">styles.zIndex</h3>
                <ul>
                    <li>Type: <code>String</code></li>
                    <li>Default: <code>'9999'</code></li>
                </ul>
                <p>Sets the global z-index property for any mousetip.</p>
                <Alert>
                    <p>All <code>styles</code> settings refer to a CSS property of the same name and are used when creating the CSS that globally styles any mousetip.</p>
                </Alert>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default ConfigurationPage;
