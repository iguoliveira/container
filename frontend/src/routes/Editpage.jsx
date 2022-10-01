import { Navbar } from "../components/navbar/Navbar";
import { Input } from "../components/inputs/Input";
import { useState } from "react";

export const Editpage = () => {
    const [heroname, setHeroname] = useState("")

    return(
        <div>
            <Navbar />
            <div>
                <form>
                    <div>
                        <div className="space-x-2">
                            <label>Hero Name:</label>
                            <Input type="text" placeholder="Hero Name" value={heroname} onchange={(evt) => setHeroname(evt.target.value)} />
                        </div>
                    </div>
                    <button>update</button>
                </form>
            </div>
        </div>
    )
}