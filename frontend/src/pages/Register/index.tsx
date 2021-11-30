import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import history from "../../history";
import Banner from '../../components/Banner';
import FormInput from "../../components/FormInput";
import FormRadio from "../../components/FormRadio";
import FormSelect from "../../components/FormSelect";
import {
    GENDER_MALE,
    GENDER_FEMALE,
    GENDER_CD,
    PACKAGE_1_CODE,
    PACKAGE_2_CODE,
    PACKAGE_3_CODE,
    PACKAGE_DETAILS,
    PAYMENR_FREQUENCY,
    PAYMENT_FREQUENCY_HALF,
    PAYMENT_FREQUENCY_MONTH,
    PAYMENT_FREQUENCY_QUARTER,
    PAYMENT_FREQUENCY_YEAR,
    INSURANCE_TYPE_DEFAULT,
    API_DEV_PRODUCT,
} from "../../common/Constant";
import styles from "../index.module.scss";

type Props = {
    slug: string;
    title: string;
};

export type State = {
    firstname: string;
    lastname: string;
    genderCd?: string;
    dob: string;
    planCode?: string;
    premiumPerYear: number;
    paymentFrequency?: string;
    saPerYear: number;
    submit: boolean;
    clear: boolean;
    required: boolean;
    alert?: any;
};

export class Register extends Component<Props, State> {
    state = {
        firstname: '',
        lastname: '',
        dob: '',
        premiumPerYear: 0,
        saPerYear: 0,
        submit: false,
        clear: false,
        required: false,
        alert: <React.Fragment />
    };

    handleCalculate = (event: any) => {
        event.preventDefault();

        if (this.state.clear) {
            this.setState({
                firstname: '',
                lastname: '',
                genderCd: '',
                dob: '',
                premiumPerYear: 0,
                saPerYear: 0,
                clear: false,
                required: true,
            });
            event.target.reset();
        } else if (this.state.submit) {
            this.setState({
                alert: <SweetAlert custom title='' customIcon='https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif' confirmBtnText='Loading' onConfirm={() => {}} />
            });

            const data = Object.fromEntries(new FormData(event.target).entries());
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            axios.post(API_DEV_PRODUCT, data, config)
            .then(response => {
                const data = JSON.parse(response.data.data);
                history.push({
                    pathname: './benefit',
                    state: data,
                });
            })
            .catch(error => {
                this.setState({
                    alert: <SweetAlert error title='Error' onConfirm={() => this.setState({
                        alert: <React.Fragment />
                    })}>
                        {error.message}
                    </SweetAlert>
                });
            });
        }
    }

    render() {
        const { slug, title } = this.props;
        return (
                <React.Fragment>
                    <Banner />
                    <div className={styles.layout}>
                        <h3>{title}</h3>
                        <form onSubmit={this.handleCalculate} className={styles.formCalculated}>
                            <FormInput title='ชื่อ' type='text' id='firstname' required={this.state.required} value={this.state.firstname} />
                            <FormInput title='นามสกุล' type='text' id='lastname' required={this.state.required} value={this.state.lastname} />
                            <FormRadio title='เพศ' id='genderCd' options={[GENDER_MALE, GENDER_FEMALE]} member={GENDER_CD} />
                            <FormInput title='วัน / เดือน / ปีเกิด' type='date' id='dob' value={this.state.dob} />
                            <FormSelect title='แบบประกัน' id='planCode' options={[PACKAGE_1_CODE, PACKAGE_2_CODE, PACKAGE_3_CODE]} member={PACKAGE_DETAILS} />
                            <FormSelect title='งวดการชำระ' id='paymentFrequency' options={[PAYMENT_FREQUENCY_YEAR, PAYMENT_FREQUENCY_HALF, PAYMENT_FREQUENCY_QUARTER, PAYMENT_FREQUENCY_MONTH]} member={PAYMENR_FREQUENCY} />
                            { slug === INSURANCE_TYPE_DEFAULT
                            ?
                                <FormInput title='ทุนประกันภัยที่ต้องการ' type='number' id='saPerYear' required={this.state.required} value={this.state.saPerYear} />
                            :
                                <FormInput title='เบี้ยประกัน' type='number' id='premiumPerYear' required={this.state.required} value={this.state.premiumPerYear} />
                            }
                            <footer>
                                <Link to='/'>
                                    <button className={styles.btn} type='button'>หน้าแรก</button>
                                </Link>
                                <button className={styles.btn} onClick={() => this.setState({clear: true, required: false})}>ล้างข้อมูล</button>
                                <button className={styles.btn} onClick={() => this.setState({submit: true})}>คำนวน</button>
                            </footer>
                        </form>
                    </div>

                    {this.state.alert}
                </React.Fragment>
            );
    }
}

export default Register;
