import React from 'react'
import { Container } from 'react-bootstrap'
import Card_x_service from './Card_x_service'


const Servicio_cards = () => {
    return <>
        <Container className='service_header d-flex flex-column flex-lg-row'>
            <Card_x_service ico_card={'bi bi-calendar3'} title_card='Nuestros Serivios' />
            <Card_x_service ico_card={'bi bi-geo'} title_card='Localizacion' />
            <Card_x_service ico_card={'bi bi-pen'} title_card='Procedimiento' />
        </Container>
    </>
}


export default Servicio_cards