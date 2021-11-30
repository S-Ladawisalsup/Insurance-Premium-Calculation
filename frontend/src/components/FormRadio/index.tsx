import React, { Component } from "react";
import styles from "../index.module.scss";

type Props = {
    title: string;
    options: Array<string>;
    id: string;
    member: any;
};

export class FormRadio extends Component<Props> {
    render() {
        const { title, options, id, member } = this.props;
        const option = options.map((item: string, index: number) => {
            return index === 0 ? (
                        <label key={index} style={{cursor: 'pointer'}}>
                            <input type='radio' name={id} id={id} value={item} className={styles.neumorphismRadio} defaultChecked /><span>{member.find((x: any) => x.name === item)?.text}</span>
                        </label>
                    ) : (
                        <label key={index} style={{cursor: 'pointer', marginLeft: 6}}>
                            <input type='radio' name={id} id={id} value={item} className={styles.neumorphismRadio} /><span>{member.find((x: any) => x.name === item)?.text}</span>
                        </label>
                    );;
        });
        return (
                <div className={styles.neumorphismBox}>
                    <div style={{paddingLeft: 6}}>{title}</div>
                    {option}
                </div>
            );
    }
}

export default FormRadio;
