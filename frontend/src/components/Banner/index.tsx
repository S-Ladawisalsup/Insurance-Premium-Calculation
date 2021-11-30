import React, { Component } from "react";
import styles from "./index.module.scss";

type Props = {};

export class Banner extends Component<Props> {
    render() {
        return (
            <div className={styles.neumorphism}>
                <img src="https://fwd.co.th/-/media/global/images/fwdlogod.svg" alt='' />
                <label className={styles.bannerLabel}>insurance</label>

                {this.props.children}
            </div>
        );
    }
}

export default Banner;
