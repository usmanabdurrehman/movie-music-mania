import React, { useEffect, useState,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./DashboardPage.css";
import Tabs from "../Components/Tabs/Tabs";
import Movie from "../Components/Movie/Movie";
import Music from "../Components/Music/Music";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { SocialIcon } from "react-social-icons";
import {BackGroundContext} from '../../../Contexts/BackGroundContext'

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

export default function DashboardPage() {

	let {bg} = useContext(BackGroundContext)

	const classes = useStyles();
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: (bg==false)?(`url(${'movies2.jpg'})`):(`url(${'djcontroller.jpg'})`),
				transition:'0.3s',
				backgroundSize:'cover',
				backgroundRepeat:'no-repeat',
				backgroundAttachment:'fixed'
			}}
		>
			<div
				className="row"
				style={{
					width: "90%",
					marginTop: "77px",
					marginBottom: "77px",
					minHeight: "500px"
				}}
			>
				<div
					className="col-lg-3"
					style={{
						borderRadius: "0 0 0 20px",
						// display: "flex",
						// alignItems: "center",
						// justifyContent: "center"
					}}
					id="banner"
				>
					<div style={{
						width:'25%',
						position:'fixed',
						top:'45%'
					}}>
						<Typography variant="h4">
							Search Movies and Music. All in one platform
						</Typography>
					</div>
				</div>
				<div className="col-lg-9">
					<Tabs movie={<Movie />} music={<Music />} />
				</div>
			</div>
		</div>
	);
}
