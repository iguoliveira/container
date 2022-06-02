import './index.css'
import GetRep from './get-rep/getRep';
import { useEffect, useState } from 'react'

export default function Footer(){
    const [avatarUrl, setAvatarUrl] = useState()
    const [name, setName] = useState()
    const [rep, setRep] = useState()

    async function repoData(){
        await fetch("https://api.github.com/users/iguoliveira/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(36, result)
                    const list = result.map((items) => (
                        <GetRep repUrl={items.svn_url} repName={items.name} />
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
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    function appearProjects(e){
        e.preventDefault()
        if(document.getElementById('projects').style.display == 'none'){
            document.getElementById('projects').style.display = 'block'
            document.getElementById('basic-info').style.borderBottom = '2px solid whitesmoke'
            document.getElementById('basic-info').style.marginTop = '5px'
        }
        else{
            document.getElementById('projects').style.display = 'none'
            document.getElementById('header').style.borderBottom = '0px'
        }
        repoData()
    }

    return(
        <footer className='footer'>
            <div className='personal-projects'>
                <div className='personal-projects-header' id='header' onClick={ appearProjects }>My Projects</div>
                <div className='personal-projects-list' id='projects'>
                    <div className='basic-info' id='basic-info'>
                        <img src={avatarUrl} className='avatar' id='avatar'/>
                        <div className='name'>{name}</div>
                    </div>

                    <div className='repositories'>
                        {rep}
                    </div>
                </div>
            </div>
        </footer>
    )
}