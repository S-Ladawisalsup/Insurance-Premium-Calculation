import React, { Component } from "react";
import Register from '../Register';
import { INSURANCE_TYPE_PREMIUM, INSURANCE_PREMIUM } from '../../common/Constant';

type Props = {};

export class Premium extends Component<Props> {
    render() {
        return (
            <Register slug={INSURANCE_TYPE_PREMIUM} title={INSURANCE_PREMIUM} />
        );
    }
}

export default Premium;
