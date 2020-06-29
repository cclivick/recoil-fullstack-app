import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const useStyles = makeStyles(() =>
    createStyles({
        wrapperRoot: {
            backgroundColor: "#a8e3cc",
            height: "100%",
            backgroundSize: "cover"
        },
    }),
);

const AppWrapper = () => {
    const [showUsers, setShowUsers] = useState(Boolean);
    const [newUser, setNewUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const classes = useStyles();

    console.log(editUser)

    return (
        <div className={classes.wrapperRoot}>
            <Header
                setShowUsers={setShowUsers}
                showUsers={showUsers}
                setNewUser={setNewUser}
                setEditUser={setEditUser}
            />
            <MainContent
                setShowUsers={setShowUsers}
                showUsers={showUsers}
                newUser={newUser}
                editUser={editUser}
                setEditUser={setEditUser}
            />
            <Footer />
        </div>
    )
};

export default AppWrapper;