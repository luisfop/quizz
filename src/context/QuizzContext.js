import React ,{useState , useContext } from 'react';

export const QuizzContext = createContext()


export const QuizzProvider = (props) => {
    const [index, setIndex ] = useState(-1);





    return(
        <QuizzContext.Provider value={{index,setIndex}}>
            {props.children}
        </QuizzContext.Provider>
    )
}