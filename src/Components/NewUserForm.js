import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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
    return (
        <FormControl className={classes.root}>
            <h4 className="formTitle">Create New User</h4>
            <div>
                <TextField id="firstName" label="First Name" type="search" className="formInput" />
                <TextField id="lastName" label="Last Name" type="search" className="formInput" />
            </div>
            <h5 className="genreHelperText">Enter your favorite genres (up to 5)</h5>
            <TextField id="genre1" className="genreInput" />
            <TextField id="genre2" className="genreInput" />
            <TextField id="genre3" className="genreInput" />
            <TextField id="genre4" className="genreInput" />
            <TextField id="genre5" className="genreInput" />
            <Button variant="contained" color="primary">
                Create
            </Button>
        </FormControl>
    )
};

export default NewUserForm;