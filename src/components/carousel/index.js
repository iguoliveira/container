import './index.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Carousel1() {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                id="img1"
                className="d-block w-100"
                src="img/carousel/img1.jpg"
                alt="First slide"
                style={{height:"80vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/carousel/img2.png"
                alt="Second slide"
                style={{height:"80vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/carousel/img3.jpg"
                alt="Third slide"
                style={{height:"80vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/carousel/img4.jpg"
                alt="Third slide"
                style={{height:"80vh"}}
                />
            </Carousel.Item>
        </Carousel>
    )
}