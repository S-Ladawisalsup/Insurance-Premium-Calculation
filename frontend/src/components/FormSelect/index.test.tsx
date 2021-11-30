import React from "react";
import ReactDOMServer from 'react-dom/server';
import FromSelect from '.';
import { GENDER_MALE, GENDER_FEMALE, GENDER_CD } from "../../common/Constant";

const jsdom = require('jsdom');

describe('FormSelect Component', () => {
    const props = {
        options: [GENDER_MALE, GENDER_FEMALE],
        member: GENDER_CD,
        id: 'test',
        title: 'Test Title',
    };

    const el = ReactDOMServer.renderToStaticMarkup(React.createElement(FromSelect, props));
    const html = new jsdom.JSDOM(el);
    const dom = html.window.document;

    it('Contains the correct structure', () => {
        expect(dom.querySelectorAll('select').length).toEqual(1);
        expect(dom.querySelectorAll('option').length).toEqual(props.options.length);
    });

    it('Check title field available', () => {
        expect(dom.querySelector('div > div').textContent).toBe(props.title);
    });
});