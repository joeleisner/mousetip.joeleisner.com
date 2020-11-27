import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Tabs, TabList, Tab, TabPanel } from '../components/tabs';

const title = 'Local attributes',
    description = 'Sometimes you need more control than what global configurations offer, hence why Pure JS Mousetip allows you to supersede global defaults with the use of local attributes.';

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
                <Tab>HTML</Tab>
                <Tab>Positioning</Tab>
                <Tab>Styles</Tab>
            </TabList>
            <TabPanel>
                <h2>Usage</h2>
                <p>Aside from the required <code>mousetip</code> and commonly used <code>mousetip:message</code> message on a target element, there's an attribute to override nearly any global default. Local attributes have a full/shorthand syntax, which are structured <code>[full-selector]:[attribute]</code> and <code>[short-selector]:[attribute]</code> respectively.</p>
                <Code example={false}>{`<div mousetip
    mousetip:message="Test message!"
    mousetip:disable-html
    mousetip:direction="top left"
    mousetip:offset="20"
    mousetip:style="border:1px solid #fff;"
    mousetip:background-color="#c31432"
    mousetip:border-radius="1rem"
    mousetip:color="#fff"
    mousetip:display="flex"
    mousetip:padding="1rem"
    mousetip:position="fixed"
    mousetip:z-index="1">
</div>`}</Code>
            <Alert>
                <p>Keep in mind that all full/shorthand examples covered within this page are using the default selectors; If you globally change the full/short selectors, this will alter how you create local attributes.</p>
            </Alert>
            </TabPanel>
            <TabPanel>
                <h2>HTML</h2>
                <Code example={false}>{`<!-- Disable HTML (if HTML is enabled globally) -->
<div mousetip:disable-html></div>
<div mt:dh></div>

<!-- Enable HTML (if HTML is disabled globally) -->
<div mousetip:enable-html></div>
<div mt:eh></div>`}</Code>
                <h3 className="h5">Disable</h3>
                <ul>
                    <li>Full: <code>mousetip:disable-html</code></li>
                    <li>Short: <code>mt:dh</code></li>
                </ul>
                <p>If HTML is enabled globally (which is the default), this will disable HTML for all mousetip's spawned by the given target element.</p>
                <h3 className="h5">Enable</h3>
                <ul>
                    <li>Full: <code>mousetip:enable-html</code></li>
                    <li>Short: <code>mt:eh</code></li>
                </ul>
                <p>If HTML is disabled globally, the will enable HTML for all mousetip's spawned by the given target element.</p>
            </TabPanel>
            <TabPanel>
                <h2>Positioning</h2>
                <Code example={false}>{`<div mousetip:direction="top left"
    mousetip:offset="20"></div>

<div mt:dir="top left"
    mt:o="20"></div>`}</Code>
                <h3 className="h5">Direction</h3>
                <ul>
                    <li>Full: <code>mousetip:direction</code></li>
                    <li>Short: <code>mt:dr</code></li>
                    <li>Value: <code>Y-direction X-direction</code></li>
                </ul>
                <p>Overrides the global direction for all mousetip's spawned by the given target element.</p>
                <ul>
                    <li>The attribute's value must be a space-separated value of Y/X directions.</li>
                    <li>The Y direction can be <code>top</code>, <code>center</code>, or <code>bottom</code>.</li>
                    <li>The X direction can be <code>left</code>, <code>center</code>, or <code>right</code>.</li>
                </ul>
                <Alert type="warning">
                    <p>Setting this attribute to <code>"center center"</code> will cause mousetips to interfere with the cursor, breaking proper functionality.</p>
                </Alert>
                <h3 className="h5">Offset</h3>
                <ul>
                    <li>Full: <code>mousetip:offset</code></li>
                    <li>Short: <code>mt:o</code></li>
                    <li>Value: <code>Number</code></li>
                </ul>
                <p>Overrides the global pixel spacing for the direction of all mousetip's spawned by the given target element.</p>
            </TabPanel>
            <TabPanel>
                <h2>Styles</h2>
                <Code example={false}>{`<div mousetip:style="border:1px solid #fff;"
    mousetip:background-color="#c31432"
    mousetip:border-radius="1rem"
    mousetip:color="#fff"
    mousetip:display="flex"
    mousetip:padding="1rem"
    mousetip:position="fixed"
    mousetip:z-index="1">
</div>

<div mt:s="border:1px solid #fff;"
    mt:bg="#c31432"
    mt:br="1rem"
    mt:c="#fff"
    mt:ds="flex"
    mt:pd="1rem"
    mt:po="fixed"
    mt:z="1">
</div>`}</Code>
            <h3 className="h5">Style</h3>
            <ul>
                <li>Full: <code>mousetip:style</code></li>
                <li>Short: <code>mt:s</code></li>
                <li>Value: <code>Valid CSS rules</code></li>
            </ul>
            <p>Adds additional valid CSS rules to the <code>style</code> attribute of all mousetip's spawned by the given target element.</p>
            <h3 className="h5">Background color</h3>
            <ul>
                <li>Full: <code>mousetip:background-color</code></li>
                <li>Short: <code>mt:bg</code></li>
                <li>Value: <code>Valid CSS color</code></li>
            </ul>
            <p>Overrides the global <code>background-color</code> style of all mousetip's spawned by the given target element.</p>
            <h3 className="h5">Border radius</h3>
            <ul>
                <li>Full: <code>mousetip:border-radius</code></li>
                <li>Short: <code>mt:br</code></li>
                <li>Value: <code>Valid CSS units</code></li>
            </ul>
            <p>Overrides the global <code>border-radius</code> style of all mousetip's spawned by the given target element.</p>
            <h3 className="h5">Color</h3>
            <ul>
                <li>Full: <code>mousetip:color</code></li>
                <li>Short: <code>mt:c</code></li>
                <li>Value: <code>Valid CSS color</code></li>
            </ul>
            <p>Overrides the global <code>color</code> style (e.g. text color) of all mousetip's spawned by the given target element.</p>
            <h3 className="h5">Display</h3>
            <ul>
                <li>Full: <code>mousetip:display</code></li>
                <li>Short: <code>mt:ds</code></li>
                <li>Value: <code>Valid CSS display property</code></li>
            </ul>
            <p>Overrides the global <code>display</code> style of all mousetip's spawned by the given target element.</p>
            <h3 className="h5">Padding</h3>
            <ul>
                <li>Full: <code>mousetip:padding</code></li>
                <li>Short: <code>mt:pd</code></li>
                <li>Value: <code>Valid CSS padding property</code></li>
            </ul>
            <p>Overrides the global <code>padding</code> style (X/Y padding) of all mousetip's spawned by the given target element.</p>
            <h3 className="h5">Position</h3>
            <ul>
                <li>Full: <code>mousetip:position</code></li>
                <li>Short: <code>mt:po</code></li>
                <li>Value: <code>Valid CSS position property</code></li>
            </ul>
            <p>Overrides the global <code>position</code> style of all mousetip's spawned by the given target element.</p>
            <h3 className="h5">Z-index</h3>
            <ul>
                <li>Full: <code>mousetip:z-index</code></li>
                <li>Short: <code>mt:z</code></li>
                <li>Value: <code>Number</code></li>
            </ul>
            <p>Overrides the global <code>z-index</code> style of all mousetip's spawned by the given target element.</p>
            </TabPanel>
        </Tabs>
    </Layout>
);

export default ConfigurationPage;
