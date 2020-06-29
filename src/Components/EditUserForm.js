import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import { EDIT_USER } from '../GraphQL/Mutations';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: "#e3e3e3",
            margin: "10px",
            padding: "5px",
            border: "1px solid grey",
            borderRadius: "6px",
            "& .formTitle": {
                margin: "5px"
            },
            "& .formInput": {
                backgroundColor: "#ffffff",
                margin: "5px",
                borderRadius: "3px",
                "& .MuiFormLabel-root": {
                    padding: "4px"
                },
                "& .MuiInput-underline::before": {
                    borderBottom: 0,
                    padding: "3px"
                }
            },
            "& .genreHelperText": {
                margin: "5px"
            },
            "& .genreInput": {
                backgroundColor: "#ffffff",
                margin: "5px",
                borderRadius: "3px"
            },
            "& .MuiInputBase-root::before": {
                borderBottom: 0
            },
            "& .MuiButtonBase-root": {
                maxWidth: "75px",
                margin: "5px"
            }
        },
    }),
);

const EditUserForm = ({ userData }) => {
    const classes = useStyles();
    const userFirstName = userData.firstName
    const userLastName = userData.lastName
    const genres = userData.favGenres
    const [firstName, setFirstName] = useState(userData.firstName)
    const [lastName, setLastName] = useState(userData.lastName)
    const [genre1, setGenre1] = useState(genres[0])
    const [genre2, setGenre2] = useState(genres[1])
    const [genre3, setGenre3] = useState(genres[2])
    const [genre4, setGenre4] = useState(genres[3])
    const [genre5, setGenre5] = useState(genres[4])
    const [editUser, {data}] = useMutation(EDIT_USER)

    return (
        <form onSubmit={e => {
            editUser({
                variables: {
                    id: userData.id,
                    firstName: firstName,
                    lastName: lastName,
                    favGenres: [
                        genre1,
                        genre2,
                        genre3,
                        genre4,
                        genre5
                    ]
                }
            });
        }}>
            <FormControl className={classes.root}>
                <h4 className="formTitle">Edit User Name</h4>
                <div>
                    <TextField id="firstName" label={userFirstName} type="search" className="formInput" onChange={e => setFirstName(e.target.value)}>{firstName}</TextField>
                    <TextField id="lastName" label={userLastName} type="search" className="formInput" onChange={e => setLastName(e.target.value)}>{lastName}</TextField>
                </div>
                <h5 className="genreHelperText">Edit user's favorite genres</h5>
                <TextField id="genre1" label={genres[0]} className="genreInput" onChange={e => setGenre1(e.target.value)}/>
                <TextField id="genre2" label={genres[1]} className="genreInput" onChange={e => setGenre2(e.target.value)}/>
                <TextField id="genre3" label={genres[2]} className="genreInput" onChange={e => setGenre3(e.target.value)}/>
                <TextField id="genre4" label={genres[3]} className="genreInput" onChange={e => setGenre4(e.target.value)}/>
                <TextField id="genre5" label={genres[4]} className="genreInput" onChange={e => setGenre5(e.target.value)}/>
                <Button variant="contained" color="primary" type="submit">
                    Create
                </Button>
            </FormControl>
        </form>
    )
}

export default EditUserForm;