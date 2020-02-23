import React,{createContext,useState} from 'react'

export const MusicContext = createContext()

export const MusicProvider = props => {

	let [musicDetails, setMusicDetails] = useState(null);
	let [showMusic,setShowMusic] = useState(false)

	return(
		<MusicContext.Provider value={{musicDetails,setMusicDetails,showMusic,setShowMusic}}>
			{props.children}
		</MusicContext.Provider>
		)

}