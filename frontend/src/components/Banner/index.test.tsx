import React from "react";
import ReactDOMServer from 'react-dom/server';
import Banner from '.';

const jsdom = require('jsdom');

describe('Banner Component', () => {
    it('Contains the correct structure', () => {
        const el = ReactDOMServer.renderToStaticMarkup(React.createElement(Banner));
        const html = new jsdom.JSDOM(el);
        const dom = html.window.document;
        expect(dom.querySelectorAll('img').length).toEqual(1);
        expect(dom.querySelector('label').textContent).toBe('insurance');
    });
});