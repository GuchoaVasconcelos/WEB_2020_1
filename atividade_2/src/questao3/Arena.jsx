import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'

function Arena(){
    return(
        <div>
            <Hero nameHero='Midoria' imgHero='https://i.pinimg.com/originals/31/f8/d1/31f8d106e2be1b5bd8f085b0acaac559.jpg' />
            <Enemy nameEnemy='Bakugou' imgEnemy='https://i.pinimg.com/564x/c4/50/1d/c4501d1e87d53ad44d73e23e19a5bed7.jpg' />
        </div>
    )
}

export default Arena;