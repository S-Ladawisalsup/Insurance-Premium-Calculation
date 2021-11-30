import React, { Component } from "react";
import Register from '../Register';
import { INSURANCE_TYPE_DEFAULT, INSURANCE } from '../../common/Constant';

type Props = {};

export class Insurance extends Component<Props> {
    render() {
        return (
            <Register slug={INSURANCE_TYPE_DEFAULT} title={INSURANCE} />
        );
    }
}

export default Insurance;
