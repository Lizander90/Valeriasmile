import React from 'react'
import { Container } from 'react-bootstrap';
import recursos from '../../assets/recursos'
import CardGallery from './CardGallery';


const GaleryControl = () => {
    const galeryImg = recursos['galeryImg'];


    return (
        <Container className='container-Gallery'>
            <>lolo</>
            {console.log('----------------')}
            {galeryImg.map(({ desc, img }) =>
                <CardGallery key={desc} titleElement={desc} imgNameElement={img} />
            )}
        </Container>

    )
}

export default GaleryControl
