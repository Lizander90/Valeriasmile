import React from 'react'

import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Container } from 'react-bootstrap';

const listServices = ['Implantes Dentales',
    'Tratamiento de Canal',
    'Blanqueamiento denta',
    'Limpieza',
    'Ortodoncia Infantil',
    'Implantes dentales',
    'Tratamientos con Botox']

const PopularServices = ({ listPopularServices = listServices }) => {
    return (
        <>
            <Container>

                <div className="Container" id="Container-PopularServices">
                    <h3 className='titleSection'>Serivios Populares</h3>
                    <ul className='ul-list ul-list-popularService'>
                        {listPopularServices.map((ServiceX) =>
                            <li key={ServiceX}>
                                <span><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></span>
                                {ServiceX}
                            </li>

                        )}

                    </ul>
                </div>
            </Container>
        </>
    )
}

export default PopularServices