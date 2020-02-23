import React, { useState, useEffect, useContext } from "react";
import "../MovieMusicBlock.css";
import axios from "axios";
import Input from "../Input/Input";
import { MusicContext } from "../../../../Contexts/MusicContext";
import { MovieContext } from "../../../../Contexts/MovieContext";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Music = () => {
	const { musicDetails, showMusic } = useContext(MusicContext);
	const { setMovieDetails } = useContext(MovieContext);
	const [token, setToken] = useState("");

	let client_id = "cacb1f97dd3045b29dd9f2186ea91685";
	let client_secret = "7d1512cf266e47fda45335eeb457861b";

	let getToken = () => {
		axios({
			method: "post",
			url: "https://accounts.spotify.com/api/token",
			withCredentials: true,
			crossdomain: true,
			headers: {
				Authorization:
					"Basic " +
					new Buffer(client_id + ":" + client_secret).toString("base64"),
				"Content-Type": "application/x-www-form-urlencoded"
			},
			data: {
				grant_type: "client_credentials"
			}
		}).then(res => {
			console.log(res.data);
		});
	};

	useEffect(() => {
		// getToken()
		setMovieDetails(null);
	}, []);

	return (
		<div>
			<div id="formDiv">
				<Input page={"music"} />
			</div>
			{musicDetails !== null ? (
				<Grow in={showMusic}>
					<div id="DescriptionDiv">
						<div className="row">
							<div className="col-lg-5" align="center">
								<div
									style={{ marginTop: "10px", marginBottom: "20px" }}
								>
									<img
										src={musicDetails.image[2]["#text"]}
										height="300px"
										width="300px"
									/>
								</div>
							</div>
							<div className="col-lg-7">
								<h2>{musicDetails.name}</h2>
								<p>{musicDetails.artist}</p>
								<a href={musicDetails.url} target="_blank">
									<Fab color="primary" aria-label="add">
										<PlayArrowIcon />
									</Fab>
								</a>
								<span style={{ marginLeft: "7px", fontSize: "14px" }}>
									Listen on Last.FM
								</span>
							</div>
						</div>
					</div>
				</Grow>
			) : null}
		</div>
	);
};

export default Music;
