import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../GraphQL/Queries';
import { useRecoilState } from 'recoil';
import { userProfile } from '../App';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core'

const useStyles = makeStyles((theme) =>
    createStyles({
        formControl: {
            marginLeft: "20px",
            minWidth: 150,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const UserSelect = ({ setShowUsers }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [profileInfo, setProfileInfo] = useRecoilState(userProfile)
    const { loading, error, data } = useQuery(GET_USERS);
    const classes = useStyles();


    if (loading) return <div>Fetching</div>
    if (error) return <div>Error</div>

    const userData = data.allUsers
    return (
        <FormControl className={classes.formControl}>
            <InputLabel>Users</InputLabel>
            <Select value={selectedUser} onChange={event => (setSelectedUser(event.target.value), setProfileInfo(event.target.value), setShowUsers(false))}>
                {userData.map(user => <MenuItem value={user} key={user.id}>{user.firstName} {user.lastName}</MenuItem>)}
            </Select>
        </FormControl>
    )
};

export default UserSelect;