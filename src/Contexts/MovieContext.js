import React,{createContext,useState} from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {

	let [movieDetails, setMovieDetails] = useState(null);
	let [showMovie,setShowMovie] = useState(false)

	return(
		<MovieContext.Provider value={{movieDetails,setMovieDetails,showMovie,setShowMovie}}>
			{props.children}
		</MovieContext.Provider>
		)

}