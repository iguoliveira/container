import './getRep.css'

export default function GetRep({ repName, description, url }){

    function showRepData(){
        document.getElementById(repName).classList.toggle("show")
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