import React from 'react'
import './LoginPage.css'

export default function LoginPage(){

	return(
		<div className="wholeWindow">
			<div className="formDiv">
				<div>
					<div align="center">
						<img src="figs/dbmysql.png" className="logo" />
					</div>
					<form id="form">
						<input type="text" name="" placeholder="Username" />
						<input type="password" name="" placeholder="Password" />
						<button type="submit" id="btn">Sign In</button>
					</form>
					<div align="center">
						<p id="dontHaveAccount">
							Don't have an account? <a href="">Sign Up</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		)
}