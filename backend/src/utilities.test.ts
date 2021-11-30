const utilities = require('./utilities');

const mockedData = {
    genderCd: 'MALE',
    dob: '1990-01-13',
    planCode: 'T11AM1',
    paymentFrequency: 'YEARLY',
    premiumPerYear: 30000,
};

describe('Checking Request Input Validation', () => {
    it('Check some input missing', () => {
        const validated = utilities.checkInputValidator(mockedData);
        expect(validated.status).toBe(400);
    });

    it('Check some input blank', () => {
        const mockedDataWithName = {
            ...mockedData,
            firstname: 'Sarayuth',
            lastname: '',
        };
        const validated = utilities.checkInputValidator(mockedDataWithName);
        expect(validated.status).toBe(400);
        expect(validated.message).toBe('lastname cannot be empty');
    });

    it('Check payment frequency incorrect', () => {
        const mockedDataWithName = {
            ...mockedData,
            firstname: 'Sarayuth',
            lastname: 'Ladawisalsup',
            paymentFrequency: 'DAILY',
        };
        const validated = utilities.checkInputValidator(mockedDataWithName);
        expect(validated.status).toBe(400);
        expect(validated.message).toBe('paymentFrequency incorrect');
    });
});
