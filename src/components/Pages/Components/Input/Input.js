import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import axios from "axios";
import { MusicContext } from "../../../../Contexts/MusicContext";
import { MovieContext } from "../../../../Contexts/MovieContext";
import BounceLoader from "react-spinners/BounceLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import BeatLoader from "react-spinners/BeatLoader";
let keys = require('../../../../keys')

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function Input(props) {
  const classes = useStyles();

  let [name, setName] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let { musicDetails, setMusicDetails, setShowMusic } = useContext(
    MusicContext
  );
  let { movieDetails, setMovieDetails, setShowMovie } = useContext(
    MovieContext
  );

  let grabDetails = e => {
    e.preventDefault();
    setIsLoading(true);
    if (props.page == "music") {
      console.log("In music block");
      console.log("In function");
      axios({
        method: "get",
        url:
          `https://ws.audioscrobbler.com/2.0/?method=track.search&track=` +
          name +
          `&api_key=`+ keys.musicapikey + `&format=json`
      }).then(res => {
        setIsLoading(false);
        console.log("In then");
        console.log(res.data.results.trackmatches.track[0]);
        setMusicDetails(res.data.results.trackmatches.track[0]);
        setShowMusic(true);
      });
    } else {
      console.log("In movie block");
      console.log(name);
      axios({
        method: "get",
        url:
          `https://api.themoviedb.org/3/search/movie?api_key=` + keys.movieapikey + `&query=` + name
      }).then(res => {
        setIsLoading(false);
        if (res.data) {
          setMovieDetails(res.data.results[0]);
          setShowMovie(true);
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={grabDetails}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder={"Search" + " " + props.page + "...."}
            inputProps={{ "aria-label": "search google maps" }}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>

      <div align="center">
        <BeatLoader
          css={{ margin: "20px auto 0px auto" }}
          size={30}
          color={"#3500D3"}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

