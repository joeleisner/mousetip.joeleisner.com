import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
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

const IndexPage = () => (
    <Layout summary={Summary}>
        <SEO title={title} description={description} />
        <h2>Text alignment</h2>
        <p>Chassis.css provides 4 basic text alignment classes:</p>
        <Code>{`<p class="t-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacus mi, malesuada nec elit dignissim, tristique suscipit massa. Pellentesque in consequat tellus. Nullam tincidunt magna non accumsan elementum. Vivamus euismod, justo a aliquam aliquam, sapien turpis iaculis ipsum, ac vulputate metus lorem eget orci.</p>
<p class="t-c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacus mi, malesuada nec elit dignissim, tristique suscipit massa. Pellentesque in consequat tellus. Nullam tincidunt magna non accumsan elementum. Vivamus euismod, justo a aliquam aliquam, sapien turpis iaculis ipsum, ac vulputate metus lorem eget orci.</p>
<p class="t-r">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacus mi, malesuada nec elit dignissim, tristique suscipit massa. Pellentesque in consequat tellus. Nullam tincidunt magna non accumsan elementum. Vivamus euismod, justo a aliquam aliquam, sapien turpis iaculis ipsum, ac vulputate metus lorem eget orci.</p>
<p class="t-j">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacus mi, malesuada nec elit dignissim, tristique suscipit massa. Pellentesque in consequat tellus. Nullam tincidunt magna non accumsan elementum. Vivamus euismod, justo a aliquam aliquam, sapien turpis iaculis ipsum, ac vulputate metus lorem eget orci.</p>`}</Code>
        <p>
            In the above example, there are 4 paragraphs using the 4 text
            alignment classes. Text alignment classes folow the{' '}
            <code>.t-*</code> class structure, where <code>*</code> can be one
            of the following letters:
        </p>
        <ul>
            <li>
                <code>l</code> means "left" and aligns text to the left.
            </li>
            <li>
                <code>c</code> means "center" and aligns text in the center.
            </li>
            <li>
                <code>r</code> means "right" and aligns text to the right.
            </li>
            <li>
                <code>j</code> means "justified" and justifies the text.
            </li>
        </ul>
        <h2>List styles</h2>
        <p>You can change the style of a list with 2 list style classes:</p>
        <Code>{`<ul class="l-u">
    <li>Unstyled list item 1</li>
    <li>Unstyled list item 2</li>
    <li>Unstyled list item 3</li>
</ul>
<ul class="l-i">
    <li>Inline list item 1</li>
    <li>Inline list item 2</li>
    <li>Inline list item 3</li>
</ul>`}</Code>
        <p>
            In the above example, there are two unordered lists, the first
            unstyled and the second inline. List style classes follow the{' '}
            <code>.l-*</code> class structure, where <code>*</code> can be one of
            the following letters:
        </p>
        <ul>
            <li>
                <code>u</code> means "unstyled" and unstyles the list.
            </li>
            <li>
                <code>i</code> means "inline" and makes each list item{' '}
                <code>display: inline-block</code>.
            </li>
        </ul>
        <h2>Screen readers</h2>
        <p>
            Sometimes while not wanting to display text it is important to allow
            folks using screen readers to contextually understand what's going
            on; This is where screen reader classes come in handy. The following
            are the screen reader classes available:
        </p>
        <ul>
            <li>
                <code>.sr</code> means "screen reader" and will hide the element
                while still being readable to screen readers.
            </li>
            <li>
                <code>.sr-f</code> means "screen reader focusable" and will hide
                the element until focused.
            </li>
        </ul>
        <h2>Margins &amp; padding adjustments</h2>
        <p>
            Some of the most extensive utility classes available are the margin
            and padding adjustment classes, allowing you to manipulate the
            margins and padding of an element in any way you see fit.
        </p>
        <h3>Margin adjustments</h3>
        <p>
            Margin adjustment classes follow the <code>.m$-*</code> class
            structure, where <code>$</code> signifies the side of adjustment and{' '}
            <code>*</code> signifies the amount of adjustment.
        </p>
        <p>
            <code>$</code> can be one of the following letters:
        </p>
        <ul>
            <li>
                <code>t</code> means "top" and adjusts the top margin of the
                element.
            </li>
            <li>
                <code>r</code> means "right" and adjusts the right margin of the
                element.
            </li>
            <li>
                <code>b</code> means "bottom" and adjusts the bottom margin of
                the element.
            </li>
            <li>
                <code>l</code> means "left" and adjusts the left margin of the
                element.
            </li>
        </ul>
        <Alert>
            <p>
                If <code>$</code> is omitted, the margins of all sides of an
                element will be adjusted, e.g. <code>.m-*</code>
            </p>
        </Alert>
        <p>
            <code>*</code> can be one of the following letters:
        </p>
        <ul>
            <li>
                <code>a</code> means "auto" and applies a margin value of{' '}
                <code>auto</code>.
            </li>
            <li>
                <code>z</code> means "zero" and applies a margin value of{' '}
                <code>0</code>.
            </li>
            <li>
                <code>t</code> means "third" and applies a margin value of{' '}
                <code>5px</code>, or a third of <code>15px</code>.
            </li>
            <li>
                <code>h</code> means "half" and applies a margin value of{' '}
                <code>7.5px</code>, or a half of <code>15px</code>.
            </li>
            <li>
                <code>f</code> means "full" and applies a margin value of{' '}
                <code>15px</code>.
            </li>
            <li>
                <code>d</code> means "double" and applies a margin value of{' '}
                <code>30px</code>, or <code>15px</code> doubled.
            </li>
        </ul>
        <Alert>
            <p>
                If <code>*</code> is prefixed with <code>n</code>, the amount of
                adjusment will be negative. This does not apply to the "auto"{' '}
                <code>a</code> or "zero" <code>z</code> adjustment amounts.
            </p>
        </Alert>
        <h3>Padding adjustments</h3>
        <p>
            Padding adjustment classes follow the <code>.p$-*</code> class
            structure, where <code>$</code> signifies the side of adjustment and{' '}
            <code>*</code> signifies the amount of adjustment.
        </p>
        <p>
            <code>$</code> can be one of the following letters:
        </p>
        <ul>
            <li>
                <code>t</code> means "top" and adjusts the top padding of the
                element.
            </li>
            <li>
                <code>r</code> means "right" and adjusts the right padding of
                the element.
            </li>
            <li>
                <code>b</code> means "bottom" and adjusts the bottom padding of
                the element.
            </li>
            <li>
                <code>l</code> means "left" and adjusts the left padding of the
                element.
            </li>
        </ul>
        <Alert>
            <p>
                If <code>$</code> is omitted, the padding of all sides of an
                element will be adjusted, e.g. <code>.p-*</code>
            </p>
        </Alert>
        <p>
            <code>*</code> can be one of the following letters:
        </p>
        <ul>
            <li>
                <code>z</code> means "zero" and applies a padding value of{' '}
                <code>0</code>.
            </li>
            <li>
                <code>t</code> means "third" and applies a padding value of{' '}
                <code>5px</code>, or a third of <code>15px</code>.
            </li>
            <li>
                <code>h</code> means "half" and applies a padding value of{' '}
                <code>7.5px</code>, or a half of <code>15px</code>.
            </li>
            <li>
                <code>f</code> means "full" and applies a padding value of{' '}
                <code>15px</code>.
            </li>
            <li>
                <code>d</code> means "double" and applies a padding value of{' '}
                <code>30px</code>, or <code>15px</code> doubled.
            </li>
        </ul>
        <h2>Visibility</h2>
        <p>
            Sometimes you want to show an element only at a certain viewport
            size, or sometimes you want hide an element at a certain viewport
            size; In both cases, that's where visibility classes come to the
            rescue.
        </p>
        <Code>{`<div class="container">
    <div class="row">
        <div class="col xs-s">This is only visible on extra small viewports.</div>
        <div class="col sm-s">This is only visible on small viewports.</div>
        <div class="col md-s">This is only visible on medium viewports.</div>
        <div class="col lg-s">This is only visible on large viewports.</div>
    </div>
    <div class="row">
        <div class="col xs-h">This is hidden on extra small viewports.</div>
        <div class="col sm-h">This is hidden on small viewports.</div>
        <div class="col md-h">This is hidden on medium viewports.</div>
        <div class="col lg-h">This is hidden on large viewports.</div>
    </div>
</div>`}</Code>
        <p>
            In the above example, there are 2 rows with 4 auto width columns,
            each with a visibility class. In the first row, each column is set
            to only show at a certain viewport size, hence why only 1 of the 4
            columns is visible. In the second row, each column is set to hide at
            a certain viewport size, hence why only 3 of the 4 columns are
            visible. To get a better visualization of how this works, adjust the
            width of your browser window.
        </p>
        <p>
            Visibility classes follow the <code>.$-*</code> class structure,
            where <code>$</code> signifies the viewport width and <code>*</code>{' '}
            signifies the visibility state.
        </p>
        <p>
            <code>$</code> can be one of the following:
        </p>
        <ul>
            <li>
                <code>xs</code> means "extra small" and targets viewports less
                than 768px wide.
            </li>
            <li>
                <code>sm</code> means "small" and targets viewports greater than
                or equal to 768px wide but less than 992px wide.
            </li>
            <li>
                <code>md</code> means "medium" and targets viewports greater
                than or equal to 992px wide but less than 1200px wide.
            </li>
            <li>
                <code>lg</code> means "large" and targets viewports greater than
                or equal to 1200px wide.
            </li>
        </ul>
        <p>
            <code>*</code> can be one of the following letters:
        </p>
        <ul>
            <li>
                <code>s</code> means "show" and applies{' '}
                <code>display: block</code> to the element at the targeted
                viewport width and applies <code>display: none</code> to the
                element at all other viewport widths.
            </li>
            <li>
                <code>h</code> means "hide" and applies applies{' '}
                <code>display: none</code> to the element at the targeted
                viewport width and applies <code>display: hide</code> to the
                element at all other viewport widths.
            </li>
        </ul>
        <Alert type="warning">
            <p>
                Visibility classes should not be applied to{' '}
                <code>display: flex</code> elements, such as rows, as they are
                intended for <code>display: block</code> elements and will break
                flexbox functionality.
            </p>
        </Alert>
    </Layout>
);

export default IndexPage;
