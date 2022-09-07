import React from 'react'
import styles from './CustomButton.module.css'

export default function CustomButton({type, label, span = 0}) {
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

    if (span === '2') {
        classNameConstructor += ` ${styles.buttonSpanTwo}`
    }

    return (
    <>
        <div className={classNameConstructor}>
            <p>{label}</p>
        </div>
    </>
    )
}
