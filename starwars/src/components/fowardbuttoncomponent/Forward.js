import React from "react"

function Forward(props){
    return(
        <button onClick={() => props.setCurrentPage(props.next)}>
            NextPage
        </button>
    )
}


export default Forward