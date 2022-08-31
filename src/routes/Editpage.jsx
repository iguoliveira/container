import { Navbar } from "../components/navbar/Navbar";
import { Input } from "../components/inputs/Input";

export const Editpage = () => {
    return(
        <div>
            <Navbar />
            <div>
                <form>
                    <div>
                        <div>
                            <label>Hero Name:</label>
                            <Input />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}