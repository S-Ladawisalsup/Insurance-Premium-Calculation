const request = require('supertest');
const app = require('./index');
const GET_PRODUCT_API = 'https://api.fwd.co.th/dev-ecommerce/getProduct';

const mockData = {
    firstname: 'Sarayuth',
    lastname: 'Ladawisalsup',
    genderCd: 'MALE',
    dob: '1990-01-13',
    planCode: 'T11AM1',
    paymentFrequency: 'YEARLY',
    premiumPerYear: 30000,
    saPerYear: 500000,
};

describe('Checking Response from API', () => {
    it('Checking response from getProducrt API', async () => {
        const response = await request(app).post('/getProduct').set('Content-Type', 'application/json').send(mockData);
        expect(response.statusCode).toBe(200);
        /* Unable to check response.body due to unknown corrected format of response */
    });
});
