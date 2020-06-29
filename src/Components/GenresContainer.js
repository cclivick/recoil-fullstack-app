import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        genreContainerRoot: {
            backgroundColor: "#e3e3e3",
            padding: "5px",
            margin: "10px",
            maxWidth: "600px",
            border: "1px solid grey",
            borderRadius: "6px",
            "& .userHeader": {
                display: "flex",
                justifyContent: "space-between",
                margin: "0 5px",
                "& .MuiButtonBase-root": {
                    color: "white",
                    backgroundColor: "limegreen",
                    height: "40px",
                    marginTop: "10px",
                    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2)"
                }
            },
            "& .genreCard": {
                margin: "5px",
                border: "1px solid grey",
                borderRadius: "4px",
                backgroundColor: "#bfbfbf",
                paddingLeft: "5px"
            }
        }
    }),
);

const GenresContainer = ({ userData, setEditUser }) => {
    const classes = useStyles();
    return (
        <div className={classes.genreContainerRoot}>
            <div className="userHeader">
                <h4>{userData.firstName} {userData.lastName}'s Favorite Genres</h4>
                <Button onClick={e => setEditUser(true)}>Edit User</Button>
            </div>
            {userData.favGenres.map(genre => {
                return (
                    <div className="genreCard" key={Math.random()}>
                        <h5>{genre}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default GenresContainer;