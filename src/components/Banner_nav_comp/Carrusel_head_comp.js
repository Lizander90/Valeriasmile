import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import recursos from '../../assets/recursos';

const Carrusel_head_comp = (list_imag) => {

    console.log(list_imag);
    return <>

        <Carousel className='w-100' indicators={false} controls={false} fade>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src="https://images.pexels.com/photos/3779697/pexels-photo-3779697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    src={recursos.img1_carrusel}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={recursos.img2_carrusel}
                    // src="https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Second slide"
                />
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={recursos.img3_carrusel}
                    // src="https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="thrid slide"
                />
            </Carousel.Item>
             */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={recursos.img4_carrusel4}
                    // src="https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="4th slide"
                />
            </Carousel.Item>

            
        </Carousel>
    </>

}

export default Carrusel_head_comp