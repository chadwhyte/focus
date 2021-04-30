import React, { FC, useState } from 'react';

export const Login : FC<{}> = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <button className="mdc-button mdc-button--outlined" onClick={() => setLoggedIn(!loggedIn)}>
                <span className="mdc-button__ripple"></span>
                <span className="mdc-button__label">
                    {`Log ${!loggedIn ? 'In' : 'Out'}`}
                </span>
            </button>
        </div>
        
    );
}