import React from 'react'
import { Card, CardImg } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import recursos from '../../assets/recursos';
// import Card from 'react-bootstrap';

const CardGallery = ({ titleElement, imgNameElement }) => {
    return <>
        <Card className='m-10'>
            <CardHeader>
                <CardImg src={imgNameElement} />
                <br />
                <span>{titleElement}</span>
            </CardHeader>
        </Card>
    </>
}

export default CardGallery