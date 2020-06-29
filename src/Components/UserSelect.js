import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_USERS } from '../GraphQL/Queries';
import { DELETE_USER } from '../GraphQL/Mutations';
import { useRecoilState } from 'recoil';
import { userProfile } from '../App';
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: "#e3e3e3",
            maxWidth: "800px",
            padding: "20px",
            margin: "20px",
            border: "1px solid grey",
            borderRadius: "6px",
            "& .userDiv": {
                backgroundColor: "#bfbfbf",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid grey",
                borderRadius: "4px",
                "& .buttonDiv": {
                    "& .userButton": {
                        margin: "0 5px"
                    }
                }
            },
            "& :first-child": {
                marginTop: "0px"
            },
            "& :last-child": {
                marginBottom: "0px"
            }
        }
    }),
);

const UserSelect = ({ setShowUsers }) => {
    const [profileInfo, setProfileInfo] = useRecoilState(userProfile)
    const { loading, error, data } = useQuery(GET_USERS);
    const [deleteUser, { deletedUser }] = useMutation(DELETE_USER);
    const classes = useStyles();


    if (loading) return <div>Fetching</div>
    if (error) return <div>Error</div>

    const userData = data.allUsers
    return (
        <div className={classes.root}>
            {userData.map(user => {
                return (
                    <div key={user.id} className="userDiv">
                        <div>
                            <h3>{user.firstName} {user.lastName}</h3>
                        </div>
                        <div className="buttonDiv">
                            <form
                                onSubmit={() => {
                                    deleteUser({
                                        variables: {
                                            id: user.id
                                        }
                                    })
                                }}
                            >
                                <Button value={user} variant="contained" color="primary" className="userButton" onClick={e => (setProfileInfo(user), setShowUsers(false))}>
                                    View
                                </Button>
                                <Button variant="contained" color="secondary" className="userButton" type="submit">
                                    Delete
                                </Button>                            
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default UserSelect;