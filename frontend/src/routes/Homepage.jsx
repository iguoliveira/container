import { Navbar } from "../components/navbar/Navbar"
import ContentImage from '/first-content-image.jpg'
import TitleImage from '/title-image.jpg'

export const Homepage = () => {
    return (
        <div className="w-screen overflow-hidden">
            <Navbar />
            <div className="overflow-hidden w-screen bg-black h-96 flex flex-col justify-between items-center">
                <img className="object-fit w-1/2 mt-10" src={TitleImage} />
                <img className="object-fit w-1/2" src={ContentImage} />
            </div>
            <div>
                sim
            </div>
        </div>
    )
}