/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    
    const [credit, setCredit] = useState(false)

    const backendUrl = 

    const loadCreditsData = async (params) => {
        try {
            
        } catch (error) {
            
        }
    }

    const value = {

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider