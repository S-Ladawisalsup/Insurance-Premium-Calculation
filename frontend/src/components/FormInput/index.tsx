import React, { Component } from "react";
import styles from "../index.module.scss";

type Props = {
    title: string;
    type?: string;
    id: string;
    required?: boolean;
    value?: string | number;
};

export class FormInput extends Component<Props> {
    render() {
        const { title, type, id, required, value } = this.props;
        return (
                <div className={styles.neumorphismBox}>
                    <div style={{paddingLeft: 6}}>{title}</div>
                    <input type={type} id={id} name={id} className={styles.neumorphismInput} placeholder={title} required={required} defaultValue={value} />
                </div>
            );
    }
}

export default FormInput;
