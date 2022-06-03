import './index.css'
import GetRep from './get-rep/getRep';
import { useEffect, useState } from 'react'

export default function ProjectsContainer(){
    const [avatarUrl, setAvatarUrl] = useState()
    const [name, setName] = useState()
    const [rep, setRep] = useState()
    const [bio, setBio] = useState()
    const [followers, setFollowers] = useState()
    const [repos, setRepos] = useState()

    async function repoData(){
        await fetch("https://api.github.com/users/iguoliveira/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(36, result)
                    const list = result.map((items) => (
                        <GetRep repName={items.name} description={items.description} url={items.html_url} />
                    ))
                    setRep(list)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    useEffect(() => {
        fetch("https://api.github.com/users/iguoliveira")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setAvatarUrl(result.avatar_url)
                    setName(result.login)
                    setBio(result.bio)
                    setFollowers(result.followers)
                    setRepos(result.public_repos)
                },
                (error) => {
                    console.log(error)
                }
            )
            repoData()
    }, [])

    return(
        <div className='initial-container'>
            <div className='contents-container'>
                <div className='initial-info'>
                    <a href='https://github.com/iguoliveira' target={'_blank'}>
                        <div className='gh-info'>
                            <img src={avatarUrl} className='info-avatar'/>
                            <div className='name-info'>{name}</div>
                        </div>
                    </a>


                    <div className='text-info'>
                        <div className='main-title'>PORTFOLIO</div>
                        <div className='about-me'>
                            <div className='main-bio'><b>About:</b> {bio}</div>
                            <div className='main-followers'><b>Followers:</b> {followers}</div>
                            <div className='main-rep-count'><b>Public Repositories:</b> {repos}</div>
                        </div>
                    </div>

                </div>

                <div className='projects-list'>
                    {rep}   
                </div>

            </div>
        </div>
    )
}