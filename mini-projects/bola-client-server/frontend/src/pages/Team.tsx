import './team.scss'
import { Link, useLoaderData, useLocation } from "react-router-dom"

export const Team = () => {
    const location = useLocation()
    const team = useLoaderData()

    return (
        <section className="team-profile-content">
            <article className='team-data'>
                <div>
                    <span className='title'>Team name: </span>
                    <span className='data'>{team.name}</span>
                </div>
                <div>
                    <span className='title'>Team in GLOBAL RANKING: </span>
                    <span className='data'>{team.globalRanking}</span>
                </div>
            </article>
            <Link to="/" className='back'>{"<-"} BACK TO TEAMS</Link>
            <Link to="matches/" className='back'>SEE MATCHES {"->"}</Link>
        </section>
    )
}