import { Links } from './links/links'

export default function Navbar(){
    return(
        <main>
            <div>
                CEP
            </div>
            <div>
                <Links linkName="About Us"/>
                <Links linkName="Github"/>
            </div>
        </main>
    )
}