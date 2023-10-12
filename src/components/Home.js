import React, { useEffect } from 'react'
import axios from 'axios'
const Home = () => {
    useEffect(() => {

        axios.get('http://localhost:8081/')
            .then(res => console.log("true", res))
            .catch(err => console.log('false', err))
    }, [])

    return (
        <>

        </>
    )
}

export default Home
