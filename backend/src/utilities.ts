module.exports = {
    checkInputValidator: (request: any) => {
        let result = { status: 200, message: '' };
        if (Object.keys(request).length < 7) {
            result = { status: 400, message: `Some field(s) missing that cannot be empty` };
        } else {
            const validator = Object.keys(request).find((item: any) => !request[item]);
            if (validator) {
                result = { status: 400, message: `${validator} cannot be empty` };
            } else {
                const PAYMENT_FREQUENCY_PERIOD = ['YEARLY', 'HALFYEARLY', 'QUARTERLY', 'MONTHLY'];
                if (!PAYMENT_FREQUENCY_PERIOD.includes(request.paymentFrequency)) {
                    result = { status: 400, message: `paymentFrequency incorrect` };
                }    
            }
        }
        

        /* Unable to validate datetime due to unsure in term of age */
        return result;
    },
}