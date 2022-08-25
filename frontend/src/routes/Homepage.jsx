import { Navbar } from "../components/navbar/Navbar"
import ContentImage from '/first-content-image.jpg'
import TitleImage from '/title-image.jpg'
import { Footer } from "../components/footer/Footer"

export const Homepage = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <Navbar />
            <div className="overflow-hidden w-screen bg-black h-96 flex flex-col justify-between items-center">
                <img className="object-fit w-1/2 mt-10" src={TitleImage} />
                <img className="object-fit w-1/2" src={ContentImage} />
            </div>
            <div className="w-screen h-72 flex justify-between items-center">
                <div className="bg-black text-white w-1/2 h-1/2 p-4 ml-4 rounded">
                    <div className="font-bold uppercase">OPM Wiki!</div>
                    <hr />
                    <div>
                        In this Wiki you will have all INFO from all your favorites one punch man's characters!
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}