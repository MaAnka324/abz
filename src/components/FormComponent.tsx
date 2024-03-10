import React, {useEffect} from 'react';
import Form from "./Form";
import s from './FormComponent.module.css'
import {useAppDispatch, useAppSelector} from "../../src/store/store";
import SuccessPost from "../../src/components/SuccessPost";
import {setSuccess} from "../../src/reducers/users-reducer";

const FormComponent = () => {
    const dispatch = useAppDispatch();
    const success = useAppSelector(state => state.users.success);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setSuccess(false));
        }, 3000);

        return () => clearTimeout(timeout);
    }, [dispatch, success]);

    return (
        <div className={s.formComponent}>
            <h1>Working with POST request</h1>
            <Form/>
            {success && <SuccessPost/>}
        </div>
    )
}

export default FormComponent;