import React,{useEffect,useState} from 'react'
import './DashboardPage.css'
import axios from 'axios'

export default function DashboardPage(){

	let [movieName,setMovieName] = useState('')
	let [isLoading,setIsLoading] = useState(false)
	let [movieDetails,setMovieDetails] = useState({})

	let grabMovieDetails = (e) => {
		e.preventDefault()
		setIsLoading(true)
		axios({
			method:'get',
			url:`theURL?name=${movieName}`,
		})
		.then((res)=>{
			setMovieDetails(res.data)
			setIsLoading(false)
		})
	}


	return(
		<div className="container">
		<div id="formDiv">
			<form id="theForm" onSubmit={grabMovieDetails}>
				<div className="row">
					<div className="col-11">
						<input type="text" name="" 
						onChange={(e)=>{
							setMovieName(e.target.value)
						}}
						placeholder="Enter Movie Name" className="form-control"/>
					</div>
					<div className="col-1">
						<button type="submit" className="btn btn-primary">Search</button>
					</div>
				</div>
			</form>
		</div>
		<div id="movieDescriptionDiv">
			<div className="row" style={{minHeight: '400px'}}>
				<div className="col-lg-4" align="center">
					<div style={{marginTop: '10px'}}>
						<img src="figs/Black Panther.jpg" height="300px" width="300px" />
					</div>
				</div>
				<div className="col-lg-8">
					<h2>Dawn Of The Planet Of the Apes</h2>
					<p><b>IMDB: </b>7.9   <b style={{paddingLeft:'5px'}}>  Rotten Tomatoes:</b> 68% Fresh</p>
					<p><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi</p>
					<button className="btn btn-primary">Buy</button>
					<button className="btn btn-primary" style={{marginLeft:'10px'}}>Go to Torrent</button>
				</div>
			</div>
		</div>
	</div>
		)
}