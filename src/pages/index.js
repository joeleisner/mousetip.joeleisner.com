import React from 'react';
import {
    faArrowCircleDown,
    faBook,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Card from '../components/card';
import Code from '../components/code';
import ExternalLink from '../components/externallink';
import Icon from '../components/icon';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './index.scss';

const title = 'Pure JS Mousetip',
    tagline = 'A vanilla javascript solution for creating tooltips that follow your mouse.',
    description =
        'Pure JS Mousetip provides a highly configurable tool for showing information in a novel way.';

const Summary = () => (
    <>
        <h1>{tagline}</h1>
        <p>{description}</p>
        <div className="index__buttons">
            <ExternalLink
                href="https://github.com/joeleisner/purejs-mousetip/releases"
                title="Pure JS Mousetip Github releases"
                className="index__button index__button--highlight"
            >
                <Icon icon={faArrowCircleDown} style={{ width: '1em' }} />
                Download
            </ExternalLink>
            <ExternalLink
                href="https://github.com/joeleisner/purejs-mousetip"
                title="Pure JS Mousetip Github"
                className="index__button"
            >
                <Icon icon={faGithub} style={{ width: '1em' }} />
                GitHub
            </ExternalLink>
            <ExternalLink
                href="http://joeleisner.com/purejs-mousetip/"
                title="Pure JS Mousetip v2.1.3 documentation"
                className="index__button"
            >
                <Icon icon={faBook} style={{ width: '1em' }} />
                v2.1.3<span className="sr">documentation</span>
            </ExternalLink>
        </div>
    </>
);

const IndexPage = () => (
    <Layout summary={Summary}>
        <SEO title={title} description={[tagline, description].join(' ')} />
        <h2>Examples</h2>
        <div className="xs-h">
            <div className="row">
                <div className="col-4 mb-f">
                    <Card mousetip={{ message: 'Test message!' }}>
                        <span><strong>mousetip:message</strong>="Test message!"</span><br/>
                        <span><strong>mt:m</strong>="Test message!"</span>
                    </Card>
                </div>
                <div className="col-4 mb-f">
                    <Card mousetip={{
                        message: 'Another message!',
                        direction: [ 'top', 'left' ]
                    }}>
                        <span><strong>mousetip:direction</strong>="top left"</span><br/>
                        <span><strong>mt:d</strong>="top left"</span>
                    </Card>
                </div>
                <div className="col-4 mb-f">
                    <Card mousetip={{
                        message: 'And another one!',
                        styles: { backgroundColor: '#c31432' }
                    }}>
                        <span><strong>mousetip:background-color</strong>="#c31432"</span><br/>
                        <span><strong>mt:bg</strong>="#c31432"</span>
                    </Card>
                </div>
            </div>
        </div>
        <div className="xs-s">
            <p>This library is intended for dekstop use only, as it requires a mouse cursor to work. Go check this site out on a desktop computer for a demo. Sorry for the inconvenience!</p>
        </div>
        <h2>Installation</h2>
        <Code language="shell" example={false}>
            npm install purejs-mousetip
        </Code>
        <h2>Latest release <small>3.0.0</small></h2>
        <p>Pure JS Mousetip has been overhauled from the ground up to support some killer new features. Here's what you can look forward to:</p>
        <ul>
            <li>
                Styling improvements galore!
                <ul>
                    <li>The default styles have been tweaked to use more modern rules, such as <code>rem</code> instead of <code>px</code> for <code>padding</code>/<code>border-radius</code>, the use of <code>background-color</code> instead of <code>background</code>, and more.</li>
                    <li>Animations are here! They are enabled by default, but they can be turned off or changed as you see fit.</li>
                    <li>Global styles are now stored within a <code>&lt;style&gt;</code> tag within the head of the page, created on <code>start()</code> and removed on <code>stop()</code>.</li>
                </ul>
            </li>
            <li>
                Global adjustments have been simplified, cleaned up, and extended.
                <ul>
                    <li>The <code>position</code> adjustment has been renamed <code>direction</code> to distinguish it from CSS position.</li>
                    <li>All style adjustments can be made under the <code>style</code> adjustment object, alleviating the need to prefix them with <code>css</code></li>
                    <li>A new <code>animations</code> adjustment is available! This can be set to a boolean to enable/disable mousetip animations, or it can be set to an object to adjust animation settings such as duration, from/to transform/opacity, timing, and more.</li>
                </ul>
            </li>
            <li>
                Local attributes have been simplified and extended as well!
                <ul>
                    <li>Style attributes no longer need the <code>css-</code> prefix, and have been renamed to more closely resemble they're CSS rules.</li>
                    <li>A new <code>mousetip-style</code> attribute to alleviate the need for multiple style attributes or to style the mousetip locally beyond what's included.</li>
                    <li>Shorthand variants are now a thing! Hate typing out <code>mousetip:background-color="..."</code>? Try <code>mt:bg="..."</code> instead.</li>
                </ul>
            </li>
            <li>
                Optimizations have been made to make things faster and less resource intensive.
                <ul>
                    <li>Elements can be passed into the <code>.start()</code> method to override the default behavior of searching the document for mousetip targets, allowing Pure JS Mousetip to be more easily integrated into other JS libraries, such as React.</li>
                    <li>For each target element using Pure JS Mousetip, there's 2 event listeners instead of 3.</li>
                    <li><code>window.requestAnimationFrame</code> is used for each update to a mousetip's position.</li>
                </ul>
            </li>
        </ul>
        <p>Plus more! There's a lot in this update to get excited about.</p>
        <p>
            Check out the{' '}
            <ExternalLink
                href="https://github.com/joeleisner/purejs-mousetip/blob/master/changelog.md"
                title="Pure JS Mousetip GitHub changelog"
            >
                changelog
            </ExternalLink>{' '}
            for previous release information.
        </p>
    </Layout>
);

export default IndexPage;
