import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CREATE_USER } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/react-hooks';

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

const NewUserForm = () => {
    const classes = useStyles();
    const [createUser, {data}] = useMutation(CREATE_USER)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [genre1, setGenre1] = useState("")
    const [genre2, setGenre2] = useState("")
    const [genre3, setGenre3] = useState("")
    const [genre4, setGenre4] = useState("")
    const [genre5, setGenre5] = useState("")

    return (
        <form onSubmit={e => {
            createUser({
                variables: {
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
                <h4 className="formTitle">Create New User</h4>
                <div>
                    <TextField id="firstName" label="First Name" type="search" className="formInput" onChange={e => setFirstName(e.target.value)} />
                    <TextField id="lastName" label="Last Name" type="search" className="formInput" onChange={e => setLastName(e.target.value)} />
                </div>
                <h5 className="genreHelperText">Enter your favorite genres (up to 5)</h5>
                <TextField id="genre1" className="genreInput" onChange={e => setGenre1(e.target.value)} />
                <TextField id="genre2" className="genreInput" onChange={e => setGenre2(e.target.value)} />
                <TextField id="genre3" className="genreInput" onChange={e => setGenre3(e.target.value)} />
                <TextField id="genre4" className="genreInput" onChange={e => setGenre4(e.target.value)} />
                <TextField id="genre5" className="genreInput" onChange={e => setGenre5(e.target.value)} />
                <Button variant="contained" color="primary" type="submit">
                    Create
                </Button>
            </FormControl>
        </form>
    )
};

export default NewUserForm;