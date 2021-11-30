import React from "react";
import ReactDOMServer from 'react-dom/server';
import Brick from '.';

const jsdom = require('jsdom');

describe('Brick Component', () => {
    const props = { header: 'Brick Title' };

    const el = ReactDOMServer.renderToStaticMarkup(React.createElement(Brick, props));
    const html = new jsdom.JSDOM(el);
    const dom = html.window.document;

    it('Contains the correct structure', () => {
        expect(dom.querySelectorAll('.card').length).toEqual(1);
        expect(dom.querySelectorAll('.header').length).toEqual(1);
        expect(dom.querySelectorAll('.footer').length).toEqual(1);
    });

    it('Check header title field available', () => {
        expect(dom.querySelector('.header').textContent).toBe(props.header);
    });
});