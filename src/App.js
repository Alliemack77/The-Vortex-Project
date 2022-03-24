import React, {useEffect, useState} from 'react'
import Jodi from './assets/jodi.jpg'
import axios from 'axios'


function App() {
    const url = 'https://the-dr-who-api.herokuapp.com/companions'
    const [companions, setCompanions] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET', 
            url: url
        }
    
        axios.request(options).then(response => {
            console.log("data", response.data)
            setCompanions(response.data)
        }).catch(err => console.log("the error!!",err))

    }, [])
    
    
    console.log("companions",companions)
    return (
        <div>
            <h1>Welcome to the Doctor Who Vortex!</h1>
            <img src={Jodi} alt=""></img>
            {
                companions.map(entry => {
                    return (
                        <div key={entry.id}>
                            <h2>{entry.name}</h2>
                            <q>{entry.quote}</q>
                        </div>
                    )
                        
                })
            }
            
        </div>
    )
    
}

export default App;

