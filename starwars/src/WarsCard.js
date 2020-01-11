import React, { useState, useEffect } from "react"

import axios from "axios"
import {BoxContainer, Box} from "./styledcomponents/Style"
import Forward from "./components/fowardbuttoncomponent/Forward"
import Previous from "./components/previouspagecomponent/Previous"
///////COMPONENTS///////
import PersonCard from "./components/PersonCard"

function WarsCard() {
    const [people, setPeople] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://swapi.co/api/people");
    const [nextPage, setNext] = useState([]);

    useEffect(() => {
        axios
            .get(currentPage)
            .then((res) => {
                let nextPage = res.data;
                let data = res.data.results;
                setNext(nextPage);
                setPeople(data);
            })
            .catch((err) => console.log("There's an error", err))
    }, [currentPage])

    if (!people) return <h3>...Loading</h3>;
    return (
        <div>
            <BoxContainer>
                {people.map((ele) => 
                 <Box>
                     <PersonCard name={ele.name} gender={ele.gender} homeworld={ele.homeworld} birthyear={ele.birth_year} />
                </Box>
            )}
            </BoxContainer>
            <Previous previous={nextPage.previous} setCurrentPage={setCurrentPage} />
            <Forward next={nextPage.next} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default WarsCard