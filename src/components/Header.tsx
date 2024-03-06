import React from 'react';
import cat from './Group 43.jpg'
import {Button} from "@mui/material";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headersComponents}>
                <div className={s.img}><img src={cat}/></div>
                <div className={s.buttons}>
                    <Button className={s.button} variant={'contained'} href="#usersSection">Users</Button>
                    <Button className={s.button} variant={'contained'} href="#signUpSection">Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;