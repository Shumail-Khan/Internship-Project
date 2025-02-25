import { createContext } from "react";
import { doctorsData } from "../assets/assets";


export const AppContext = createContext()

const AppContextProviders = ({children})=>{
    const value = {
        doctorsData

    }
      

   
    return(
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export default AppContextProviders