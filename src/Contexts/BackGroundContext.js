import React,{createContext,useState} from 'react'

export const BackGroundContext = createContext()

export const BackGroundProvider = props => {

	let [bg,setBg] = useState(false)

	return(
		<BackGroundContext.Provider value={{bg,setBg}}>
			{props.children}
		</BackGroundContext.Provider>
		)

}