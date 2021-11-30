import React from "react";
import ReactDOMServer from 'react-dom/server';
import FormRadio from '.';
import { GENDER_MALE, GENDER_FEMALE, GENDER_CD } from "../../common/Constant";

const jsdom = require('jsdom');

describe('FormRadio Component', () => {
    const props = {
        options: [GENDER_MALE, GENDER_FEMALE],
        member: GENDER_CD,
        id: 'test',
        title: 'Test Title',
    };

    const el = ReactDOMServer.renderToStaticMarkup(React.createElement(FormRadio, props));
    const html = new jsdom.JSDOM(el);
    const dom = html.window.document;

    it('Contains the correct structure', () => {
        expect(dom.querySelectorAll('input[type=radio]').length).toEqual(props.options.length);
    });

    it('Check title field available', () => {
        expect(dom.querySelector('div > div').textContent).toBe(props.title);
    });
});