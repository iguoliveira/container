import './index.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Carousel1() {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/miranha.jpg"
                alt="First slide"
                style={{height:"80vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/fort.png"
                alt="Second slide"
                style={{height:"80vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/fort2.png"
                alt="Third slide"
                style={{height:"80vh"}}
                />
            </Carousel.Item>
        </Carousel>
    )
}