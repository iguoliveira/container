import { useState } from 'react'
import './getRep.css'

export default function GetRep({ repName, description, url, allReps }){

    function showRepData(){
        document.getElementById(repName).classList.toggle("show")
        closeOthers(repName)
    }

    function closeOthers(value){
        const nameClose = allReps.map((repos) => {
            return document.getElementById(repos).classList.contains("show") && repos != value ?
                document.getElementById(repos).classList.toggle("show")
                :
                console.log(repos)
        })
    }

    return(
        <div className='rep'>
            <div><a className='reps-name' onClick={ showRepData }>{repName}</a></div>
            <div id={repName} className='dropdown-content'>
                <div><b>Description: </b>{description}</div>
                <div><b>Link: </b><a href={url} target={'_blank'}>{url}</a></div>
            </div>
        </div>
    )
}