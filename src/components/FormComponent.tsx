import React from 'react';
import Form from "./Form";
import s from './FormComponent.module.css'

const FormComponent = () => {
    return (
        <div className={s.formComponent}>
            <h1>Working with POST request</h1>
            <Form/>
        </div>
    )
}

export default FormComponent;