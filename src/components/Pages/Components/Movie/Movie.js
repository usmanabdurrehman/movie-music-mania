import React, { useState, useContext, useEffect } from "react";
import "../MovieMusicBlock.css";
import axios from "axios";
import Input from "../Input/Input";
import { MusicContext } from "../../../../Contexts/MusicContext";
import { MovieContext } from "../../../../Contexts/MovieContext";
import Grow from "@material-ui/core/Grow";

const Movie = () => {
	const { movieDetails, showMovie } = useContext(MovieContext);
	const { setMusicDetails } = useContext(MusicContext);

	useEffect(() => {
		setMusicDetails(null);
	}, []);

	return (
		<div id="block">
			<div id="formDiv">
				<Input page={"movie"} />
			</div>
			{movieDetails !== null ? (
				<div>
					<Grow in={showMovie}>
						<div id="DescriptionDiv">
							<div className="row">
								<div className="col-lg-5" align="center">
									<div
										style={{
											marginTop: "10px",
											marginBottom: "10px"
										}}
									>
										<img
											src={
												"https://image.tmdb.org/t/p/w500/" +
												movieDetails.poster_path
											}
											height="450px"
											width="300px"
										/>
									</div>
								</div>
								<div className="col-lg-7">
									<h2>{movieDetails.original_title}</h2>
									<p>
										<b>Release Date:</b> {movieDetails.release_date}
									</p>
									<p>
										<b>Overview: </b>
										{movieDetails.overview}
									</p>
								</div>
							</div>
						</div>
					</Grow>
				</div>
			) : null}
		</div>
	);
};

export default Movie;
