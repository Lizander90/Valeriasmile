import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { img1 } from '../../../../assets/CARRUSEL1.JPG';

const Carrusel_head_comp = () => {
    return <>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3779697/pexels-photo-3779697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Second slide"
                />
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3779700/pexels-photo-3779700.jpeg"
                    alt="Third slide"
                />
            </Carousel.Item>

        </Carousel>
    </>

}

export default Carrusel_head_comp