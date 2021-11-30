import React, { Component } from "react";
import {
    PACKAGE_DETAILS,
    PAYMENR_FREQUENCY,
} from "../../common/Constant";
import styles from "./index.module.scss";


type Props = {
    data: any;
};

export class Card extends Component<Props> {
    render() {
        const { data } = this.props;
        return (
            <div className={styles.filterBox}>
                <label>ผลิตภัณฑ์ : </label>
                <label>{data.productId}</label>

                <label>Prod. Type : </label>
                <label>{data.productTypeCd}</label>

                <label>Prod. Family : </label>
                <label>{data.productFamilyCd}</label>

                <label>ทุนประกันภัย : </label>
                <label>{data.baseSumAssured}</label>

                <label>เบี้ยประกัน : </label>
                <label>{data.baseAnnualPremium}</label>

                <label>Prod. Term : </label>
                <label>{data.productTerm}</label>

                <label>Paying Term : </label>
                <label>{data.premiumPayingTerm}</label>

                <label>งวดการชำระ : </label>
                <label>{PAYMENR_FREQUENCY.find((x: any) => x.name === data.paymentFrequencyCd)?.text}</label>

                <label>แบบประกัน : </label>
                <label>{PACKAGE_DETAILS.find((x: any) => x.name === data.planCode)?.text}</label>

                <button className={[styles.btn, (data.selected ? styles.active : '')].join(' ')}>ซื้อประกันภัย</button>
            </div>
        )
    }
};

export default Card;
