import { useEffect } from "react"
import { Link, useLoaderData } from "react-router-dom"
import "./home.scss"

export const Home = () => {
    document.title = "Home"
    const team = useLoaderData()

    return (
        <section className="home-content">
            <article className="teams-container">
                {team.teams.map((item, index) => {
                    return <Link to={`/team/${item.name}/${item.teamId}`} key={index} className="team">
                        <span className="name">Name: </span><span>{item.name}</span>
                        <span className="name">Global Rank: </span><span>{item.globalRanking}</span>
                    </Link>
                })}
            </article>
        </section>
    )
}