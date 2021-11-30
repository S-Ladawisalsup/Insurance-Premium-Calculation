import React, { Component } from "react";
import styles from "../index.module.scss";

type Props = {
    title: string;
    options: Array<string>;
    id: string;
    member: any;
};

export class FormSelect extends Component<Props> {
    render() {
        const { title, options, id, member } = this.props;
        const option = options.map((item: string, index: number) => {
            return <option value={item} key={index}>{member.find((x: any) => x.name === item)?.text}</option>
        });
        return (
                <div className={styles.neumorphismBox}>
                    <div style={{paddingLeft: 6}}>{title}</div>
                    <select id={id} name={id} className={styles.neumorphismInput}>
                        {option}
                    </select>
                </div>
            );
    }
}

export default FormSelect;
