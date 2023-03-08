import React from "react";
import s from './Button.module.css'

// const touch =() => {
// alert('rrrrr')
// }

const Button = () => {

    return(
        <div className={s.div}>
        <button className={s.button1} text-i={"Do not touch"} hover-text={"Seriously? You want trouble"} ></button>
        </div>
    )
}
export default Button;