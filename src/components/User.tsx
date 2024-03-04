import React from 'react';
import styles from "./User.module.css"

type UserBlockType = {
    photo: string | null
    name: string
    position: string
    email: string
    phone: string
}

const User = (props: UserBlockType) => {
    return (
        <div className={styles.block}>
            {props.photo && (
                <div>
                    <img className={styles.photo} src={props.photo} alt="User Photo" />
                    {/*<img className={styles.photo} src={props.photo instanceof File ? URL.createObjectURL(props.photo) : props.photo} alt="User Photo" />*/}
                </div>
            )}
            <div>{props.name}</div>
            <div>{props.position}</div>
            <div>{props.email}</div>
            <div>{props.phone}</div>
        </div>
    );
};

export default User;