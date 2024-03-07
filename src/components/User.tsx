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
                <div className={styles.imgUser}>
                    <img className={styles.photo} src={props.photo} alt="User Photo"/>
                </div>
            )}
            <div className={styles.nameUser}>{props.name.length < 34 ? props.name : props.name.substring(0, 34) + '...'}</div>
            <div className={styles.infoUser}>
                <div>{props.position}</div>
                {/*<EmailComponent email={props.email}/>*/}
                <a className={styles.email} href="" title={props.email}>{props.email.length < 34 ? props.email : props.email.substring(0, 34) + '...'}</a>

                <div>{props.phone}</div>
            </div>
        </div>
    );
};


// interface EmailProps {
//     email: string;
// }

// const EmailComponent: React.FC<EmailProps> = ({ email }) => {
//     const copyToClipboard = (text: string) => {
//         navigator.clipboard.writeText(text);
//         alert("Email скопирован: " + text);
//     };
//
//     return (
//         <div>
//             <span className={styles.email} onClick={() => copyToClipboard(email)}>
//         {email}
//       </span>
//         </div>
//     );
// };

export default User;