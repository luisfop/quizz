import React ,{useState , createContext } from 'react';

export const QuizzContext = createContext()


export const QuizzProvider = (props) => {
    const [counter, setCounter] = useState(0);
    const [result, setResult] = useState(0);

    return(
        <QuizzContext.Provider value={{counter, setCounter, result,setResult}}>
            {props.children}
        </QuizzContext.Provider>
    )
}