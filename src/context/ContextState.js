import React, { useEffect, useState } from 'react';
import myContext from './myContext';

const ContextState = ({ children }) => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            window.document.body.style.background = '#0f172a';
            window.document.body.style.color = 'white';
        }
        else {
            window.document.body.style.background = 'white';
            window.document.body.style.color = 'black';
        }
    }, [dark]);



    return (
        <myContext.Provider value={{
            dark,
            setDark
        }}>
            {children}
        </myContext.Provider>
    )
}

export default ContextState
