import React, { useState, useEffect } from 'react'

export default props => {

    let [cont, setCont] = useState(0);
    let [cont2, setCont2] = useState(0);
    let [status, setStatus] = useState('Par');

    useEffect(() => {
            if(cont%2===0){
                setStatus('PAR');
            }else{
                setStatus('IMPAR');
            }
        }, [cont])
    
    return (
        <div>
            <h1>Contador: {cont}</h1>
            <h1>Contador2: {cont2}</h1>
            <h1>Status: {status}</h1>
            <button onClick={() => setCont(cont + 1)}>Incrementar contador 1</button>
            <button onClick={() => setCont2(cont2 + 1)}>Incrementar contador 2</button>
        </div>
    )
}