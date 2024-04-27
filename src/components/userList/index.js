import React, {useEffect, useState} from 'react';
import s from './userList.module.css';

const UserList = () => {
    const [userList, setUserList] = useState([]);

    const usersApi = ' https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(usersApi)
            .then(response => response.json())
            .then(data => setUserList(data))
    }, [])

    return (
        <table className={s.userTable}>
            <tr>
                <th>{'Name'}</th>
                <th>{'Login'}</th>
                <th>{'E-mail'}</th>
                <th>{'Phone number'}</th>
                <th>{'Website'}</th>
            </tr>
            {
                userList.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                ))
            }
        </table>
    );
};

export default UserList;
