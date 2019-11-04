import React from 'react';

type UserInfoT = {
    name: string,
    age: number
};

export const ShowUserInfo: React.SFC<UserInfoT> = (props) => {

    const { name, age } = props;

    return (
        <div style={{ textAlign: 'center' }}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}