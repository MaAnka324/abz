import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../src/store/store";
import {getUsersTC} from "../../src/reducers/users-reducer";
import User from "../../src/components/User";
import s from "./User.module.css"

const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users);
    const [count, setCount] = useState(6);

    useEffect(() => {
        const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`;
        dispatch(getUsersTC(url));
    }, [dispatch, count]);

    const handleNextUsersList = () => {
        setCount(prevCount => prevCount + 6);
    };

    return (
        <div>
            <div className={s.usersBlock}>
                {users.users.map(u => (
                    <User
                        key={u.id}
                        name={u.name}
                        photo={u.photo}
                        email={u.email}
                        position={u.position}
                        phone={u.phone}
                    />
                ))}
            </div>
            <button onClick={handleNextUsersList}>SHOW MORE</button>
        </div>
    );
};

export default Users;