import React from "react"
import styled from "styled-components"

export const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
`;


export const Box = styled.div`
    border: 1px solid black;
    margin: 1%;
    border-radius: 1rem;
    width: 30%;
    background-color: rgba(191,110,60, 0.5);
    margin-top: 5%;
    color: white;
    box-shadow: 0px 4px black;
`;

export const InfoInBox= styled.div`
    margin: 1rem;
`;