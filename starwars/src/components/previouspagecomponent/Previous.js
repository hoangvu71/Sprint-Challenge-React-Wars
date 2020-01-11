import React from "react"

function Previous(props){
    return(
        <button onClick={() => props.setCurrentPage(props.previous)}>
            NextPage
        </button>
    )
}


export default Previous