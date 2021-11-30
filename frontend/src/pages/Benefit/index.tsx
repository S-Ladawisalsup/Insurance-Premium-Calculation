import React, { Component } from "react";
import history from "../../history";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import styles from "../index.module.scss";
import { Link } from "react-router-dom";

type Props = {};

export type State = {
    data: any;
};

export class Benefit extends Component<Props, State> {
    state = {
        data: history.location.state,
    };

    componentDidMount() {
        history.replace({
            ...history,
            state: undefined,
        });
    }

    render() {
        const data: any = this.state ? this.state.data : [];
        const cards = data ? data.quotationProductList.map((item: any, index: number) => {
            return <Card data={item} key={index} />
        }) : [];
        const home = cards.length ? <Link style={{float: 'right', transform: 'translateX(-5rem)'}} to='/'><button>กลับสู่หน้าหลัก</button></Link> : <React.Fragment />
        return (
                <React.Fragment>
                    <Banner>{home}</Banner>
                    <div className={styles.layout}>
                        { 
                            cards.length
                            ? cards
                            : <div className={styles.notfound}>
                                <label>ไม่พบรายการประกันภัยที่ท่านเลือก กรุณา</label>
                                <Link to='/'><button>กลับสู่หน้าหลัก</button></Link>
                                <label>หรือทำรายการอีกครั้ง</label>
                            </div>
                        }
                    </div>
                </React.Fragment>
            );
    }
}

export default Benefit;
