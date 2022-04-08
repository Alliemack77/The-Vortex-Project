import React, {useState, useEffect} from "react";
import axios from "axios";

const CompanionList = () => {
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


    return (
        <>
            <h1>The Companion List</h1>

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
        
        </>
        
    )

}

export default CompanionList 