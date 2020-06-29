import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';
import { userProfile } from '../App';

const useStyles = makeStyles(() =>
    createStyles({
        headerRoot: {
            display: "flex",
            "& .titleRoot": {
                marginTop: 0,
                padding: "10px"
            },
            "& .headerButtonDiv": {
                display: "flex",
                position: "fixed",
                right: 0,
                "& .naviButton": {
                    margin: "10px"
                }
            }
        }
    }),
);


const Header = ({ showUsers, setShowUsers, setNewUser, setEditUser }) => {
    const [currentUser, setCurrentUser] = useRecoilState(userProfile)
    let label = showUsers ? "Hide Users" : "Show Users";
    const classes = useStyles();
    return (
        <div className={classes.headerRoot}>
            <h1 className="titleRoot">Genre Sort App</h1>
            <div className="headerButtonDiv">
                <Button className="naviButton" variant="contained" color="primary" onClick={e => (setShowUsers(!showUsers), setNewUser(false), setCurrentUser(null), setEditUser(false))}>
                    {label}
                </Button>
                {showUsers ?
                    <div>
                    <Button className="naviButton" variant="contained" color="primary" onClick={e => (setNewUser(true), setShowUsers(false), setCurrentUser(null))}>
                        Add User
                    </Button>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Header;