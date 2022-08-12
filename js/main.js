"use strict"

window.addEventListener('load', () => {
    console.log('load');

    // document.getElementById('start').addEventListener('click', (function (){
    //     return function f() {
    //         console.log('click!!');

            window.addEventListener('deviceorientation', e => {
                const absolute = e.absolute
                const alpha    = e.alpha
                const beta     = e.beta
                const gamma    = e.gamma
        
                // const outputText = `absolute:${absolute},alpha:${alpha},beta:${beta},gamma:${gamma}`
        
                document.getElementById('absolute').innerHTML = absolute
                document.getElementById('alpha').innerHTML = alpha
                document.getElementById('beta').innerHTML = beta
                document.getElementById('gamma').innerHTML = gamma
            })

    //         document.getElementById('start').removeEventListener('click', f)
    //     }
    // })())

})