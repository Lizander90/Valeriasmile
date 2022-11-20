import React from 'react'
import 'react-bootstrap'
import { Button, Card, CardGroup, CardImg } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import recursos from '../../assets/recursos';

const defaultCONTENT = 'Valeria Smile is a dental practice located  dental practice located just off the N11 in Booterstown  with ample parking directly just off the N11 in Booterstown  with ample parking directly outside just off the N11 in Booterstown with  mple parking directly ';

const PlusServiceElement = ({ titleElement, btnTitleElement, contentElement = defaultCONTENT, imgNameElement }) => {
    return <>
        <Card>
            <CardHeader>
                <CardImg src={recursos[imgNameElement]}></CardImg>
                <br />
                <br />
                <h3 className='titleSection'> {titleElement} </h3>
                <div>
                    {contentElement}
                </div>
                <br />
                <Button className='buttonWhatsapp' variant="light">{btnTitleElement}</Button>
            </CardHeader>
        </Card>
    </>
}

export default PlusServiceElement