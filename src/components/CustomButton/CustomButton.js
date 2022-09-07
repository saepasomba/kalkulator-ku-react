import React from 'react'
import styles from './CustomButton.module.css'

export default function CustomButton({type, label}) {
    let classNameConstructor = `${styles.btn} `
    switch (type) {
        case "btn-neutral":
            classNameConstructor += styles.btnNeutral
            break;
        case "btn-gray":
            classNameConstructor += styles.btnGray
            break;
        case "btn-orange":
            classNameConstructor += styles.btnOrange
            break;
        default:
            break;
    }
    return (
    <>
        <div className={classNameConstructor}>
            <h2>{label}</h2>
        </div>
    </>
    )
}
