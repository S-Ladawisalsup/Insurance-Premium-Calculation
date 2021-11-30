import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCommentDollar, faFunnelDollar } from "@fortawesome/free-solid-svg-icons";
import { DEFAULT_CARD_HEADER } from "../../common/Constant";
import styles from "./index.module.scss";

type Icon = {
    [key: string]: any;
}
const fontAwesomeDict: Icon = {
    'faCommentDollar': faCommentDollar,
    'faFunnelDollar': faFunnelDollar,
};

type Props = {
    header: string;
    icon?: any;
    footer?: string;
};

export class Brick extends Component<Props> {
    render() {
        const {
            header,
            icon,
            footer,
        } = this.props;
        const cardHeader = header || DEFAULT_CARD_HEADER;
        const cardIcon = icon ? fontAwesomeDict[icon] : faPlus;
        return (
            <div className={styles.card}>
                <div className={styles.header}>{cardHeader}</div>
                <FontAwesomeIcon icon={cardIcon} />
                <div className={styles.footer}>{footer}</div>
            </div>
        );
    }
}

export default Brick;
