import './getRep.css'

export default function GetRep({ repUrl, repName }){

    return(
        <div className='rep'>
            <div><a href={`${repUrl}`} target={ '_blank' } className='reps-name'>{repName}</a></div>
        </div>
    )
}