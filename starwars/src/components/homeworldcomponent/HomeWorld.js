import React, {useState, useEffect} from "react"
import axios from "axios"
function HomeWorld(props){
    const [homeworld, setHomeWorld] = useState([]);
    useEffect(() => {
        axios
            .get(props.homeworld)
            .then(res => {
                let data = res.data;
                setHomeWorld(data);
            })
            .catch(err => console.log("Error in HomeWorld", err))
    }, [])
    return(
        <div>
            Origin: {homeworld.name}
        </div>
    )
}

export default HomeWorld