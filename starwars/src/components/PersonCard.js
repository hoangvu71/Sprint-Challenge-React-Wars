import React from "react"
import Name from "./namecomponent/Name"
import Birth from "./birthyearcomponent/Birth"
import Gender from "./gendercomponent/Gender"
import HomeWorld from "./homeworldcomponent/HomeWorld"
import {InfoInBox} from "../styledcomponents/Style"

function PersonCard(props){
    return(
        <div>
            <InfoInBox>
                <Name name={props.name} />
            </InfoInBox>
            
            <InfoInBox>
                <Gender gender={props.gender} />
            </InfoInBox>
            
            <InfoInBox>
                <Birth birthyear={props.birthyear} />
            </InfoInBox>
            
            <InfoInBox>
                <HomeWorld homeworld={props.homeworld} />
            </InfoInBox>

        </div>
    )
}

export default PersonCard