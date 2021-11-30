import React from "react";
import ReactDOMServer from 'react-dom/server';
import Card from '.';

const jsdom = require('jsdom');

const mockedData = {
    productId: 'ECOMMBIG3',
    productTypeCd: 'PLAN',
    productFamilyCd: 'TERM',
    baseSumAssured: 1205594,
    baseAnnualPremium: 30000,
    productTerm: 5,
    premiumPayingTerm: 5,
    paymentFrequencyCd: 'YEARLY',
    palnCode: 'T11A20',
    selected: true,
};

describe('Card Component', () => {
    const el = ReactDOMServer.renderToStaticMarkup(React.createElement(Card, {data: mockedData}));
    const html = new jsdom.JSDOM(el);
    const dom = html.window.document;

    it('Contains the correct structure', () => {
        expect(dom.querySelectorAll('label').length).toEqual(18);
    });

    it('Check paymentFrequencyCd text be converted', () => {
        const newMockedData = { ...mockedData, paymentFrequencyCd: 'MONTHLY' };
        const elForMonth = ReactDOMServer.renderToStaticMarkup(React.createElement(Card, {data: newMockedData}));
        const htmlForMonth = new jsdom.JSDOM(elForMonth);
        const dom2 = htmlForMonth.window.document;
        expect(dom.querySelectorAll('label')[15].textContent).toBe('รายปี');
        expect(dom2.querySelectorAll('label')[15].textContent).toBe('รายเดือน');
    });
});