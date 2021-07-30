import React from 'react'

import Wheel from '../components/wheel/Wheel'
const Home = () => {
    return (
        <>
            <div>
                <span
                    className="iconic iconic-warning"
                    title="icon warning"
                    aria-hidden="true"
                ></span>
            </div>
            <Wheel />
        </>
    )
}

export default Home
