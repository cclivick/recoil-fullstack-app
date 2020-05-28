import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Header = ({ showUsers, setShowUsers }) => {
    let label = showUsers ? "Hide Users" : "Show Users"
    return (
        <div>
            <h1>Header</h1>
            <Button variant="contained" color="primary" onClick={e => setShowUsers(!showUsers)}>
                {label}
            </Button>
        </div>
    )
}

export default Header;