import React, { useState } from 'react'

const About = () => {
const [number, setNumber] = useState(0);

function hadleTambah() {
    setNumber(number + 1);
}


    return (
        <div>
            hello ini about
            <button 
            onClick={hadleTambah}
            className='btn ml-10 btn-primary'>clik</button>
            <p>Current number: {number}</p>
        </div>
    )
}

export default About
