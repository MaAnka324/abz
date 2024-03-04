import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../src/store/store";
import {getUsersTC} from "../../src/reducers/users-reducer";
import User from "../../src/components/User";
import s from "./User.module.css"

const Users = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users);
    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])
    return (
        <div>
            <div className={s.usersBlock}>
                {users.users
                    .map(u => <User key={u.id}
                                    name={u.name}
                                    photo={u.photo}
                                    email={u.email}
                                    position={u.position}
                                    phone={u.phone}
                    />)
                }
            </div>
            <button>SHOW MORE</button>
        </div>
    );
};

export default Users;