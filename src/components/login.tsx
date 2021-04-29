import React, { FC, useState } from 'react';

export const Login : FC<{}> = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <button type='button' onClick={() => setLoggedIn(!loggedIn)}>
            {`Log ${!loggedIn ? 'In' : 'Out'}`}
        </button>
    );
}