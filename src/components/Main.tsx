import React from 'react';
import picture from "./1 copy 3.jpg"
import s from "./Main.module.css"
import {Button} from "@mui/material";

const Main = () => {
    return (
        <div className={s.main}>
            <img alt='picture' src={picture}/>
            <div className={s.overlayText}>
                <h1>Test assignment for front-end developer</h1>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <Button className={s.button} variant={'contained'} href="#signUpSection">Sign Up</Button>
            </div>
        </div>
    );
};

export default Main;