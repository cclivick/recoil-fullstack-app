import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        genreContainerRoot: {
            backgroundColor: "#e3e3e3",
            padding: "5px",
            margin: "10px",
            maxWidth: "600px",
            border: "1px solid grey",
            borderRadius: "6px",
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

const GenresContainer = ({ genres }) => {
    const classes = useStyles();
    return (
        <div className={classes.genreContainerRoot}>
            {genres.map(genre => {
                return (
                    <div className="genreCard" id={genre}>
                        <h5>{genre}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default GenresContainer;