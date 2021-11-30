import React from "react";
import ReactDOMServer from 'react-dom/server';
import FormInput from '.';

const jsdom = require('jsdom');

describe('FormInput Component', () => {
    const props = { id: 'Test', title: 'Test Title' };

    const el = ReactDOMServer.renderToStaticMarkup(React.createElement(FormInput, props));
    const html = new jsdom.JSDOM(el);
    const dom = html.window.document;

    it('Contains the correct structure', () => {
        expect(dom.querySelectorAll('input').length).toEqual(1);
    });

    it('Check title field available', () => {
        expect(dom.querySelector('div > div').textContent).toBe(props.title);
    });
});