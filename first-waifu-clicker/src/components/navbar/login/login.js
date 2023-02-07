import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { firebase, auth } from "./../../../service/firebase"
import { Logout } from "./logout"

export function Login(){
    const { user, setUser } = useAuth()
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                const { uid, displayName, photoURL } = user
                if(!displayName || !photoURL) throw new Error("User doesn't have DisplayName or URL Photo")
    
                setUser({
                    id: uid,
                    avatar: photoURL,
                    name: displayName
                })
            }
        })
    },[])

    const handleClickLogout = async () => {
        firebase.auth().signOut().then(function() {
            console.log(auth.currentUser.displayName)
        })
        setIsLogin(false)
    }

    const handleClickLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(provider)
        const xxx = firebase.auth().signOut

        if(result.user){
            const { uid, displayName, photoURL } = result.user
            setIsLogin(true)
            if(!displayName || !photoURL) throw new Error("User doesn't have DisplayName or URL Photo")

            setUser({
                id: uid,
                avatar: photoURL,
                name: displayName
            })
        }
    }

    return (
        <div>
            {isLogin ? <Logout name={user.name} clickHandler={handleClickLogout}/> : <button onClick={handleClickLogin} className="hover:text-slate-600 transition-all duration-250 ease-linear">Login</button>}
        </div>
    )
}