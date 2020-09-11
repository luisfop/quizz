import React ,{useState , createContext } from 'react';

export const QuizzContext = createContext()


export const QuizzProvider = (props) => {
    const [counter, setCounter] = useState(0);


    return(
        <QuizzContext.Provider value={[counter,setCounter ]}>
            {props.children}
        </QuizzContext.Provider>
    )
}