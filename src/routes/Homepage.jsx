import { Navbar } from "../components/navbar/Navbar"
import ContentImage from '/first-content-image.jpg'
import TitleImage from '/title-image.jpg'
import { Footer } from "../components/footer/Footer"

export const Homepage = () => {
    return (
        <div className="w-screen h-screen overflow-auto">
            <Navbar />
            <div className="overflow-hidden w-screen bg-black h-96 flex flex-col justify-between items-center">
                <img className="object-fit w-1/2 md:w-96 mt-10" src={TitleImage} />
                <img className="object-fit w-1/2 sm:w-48 md:w-52" src={ContentImage} />
            </div>
            <div className="w-screen h-72 flex justify-center items-center">
                <div className="bg-black text-white w-1/2 sm:w-1/4 md:w-1/4 h-1/2 p-4 ml-4 rounded">
                    <div className="font-bold uppercase text-center">OPM Wiki</div>
                    <hr />
                    <div className="text-sm text-left">
                        In this Wiki you will have all INFO from all your favorites one punch man's characters!
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}