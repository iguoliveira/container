import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

export default function useAuth(){
    return useContext(authContext)
}