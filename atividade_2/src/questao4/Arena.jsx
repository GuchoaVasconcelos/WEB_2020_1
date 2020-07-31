import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'

function Arena(props){
    return(
        <div>
            
            
            {React.Children.map(props.children, (personagem) => {
                return React.cloneElement(personagem, {...props});
            })}
        </div>
    )
}

export default Arena;