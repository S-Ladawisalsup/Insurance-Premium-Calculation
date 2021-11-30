import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from '../../components/Banner';
import Brick from '../../components/Brick';
import { INSURANCE, INSURANCE_PREMIUM, INSURANCE_ICON, INSURANCE_PREMIUM_ICON } from '../../common/Constant';
import styles from "../index.module.scss";

type Props = {};

export class Landing extends Component<Props> {
    render() {
        return (
            <React.Fragment>
                <Banner />
                <div className={styles.layout}>
                    <Link to='./premium' className={styles.linkMenu}>
                        <Brick header={INSURANCE_PREMIUM} icon={INSURANCE_PREMIUM_ICON} />
                    </Link>
                    <Link to='./insurance' className={styles.linkMenu}>
                        <Brick header={INSURANCE} icon={INSURANCE_ICON} />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;
