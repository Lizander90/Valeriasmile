import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const textAlt = "Dental is a dental practice located just off the N11  in Booterstown with ample parking directly outside. We specialise in treating toothache (root canal treatment / Endodontics) and";






const Card_x_service = ({ ico_card = null, title_card = "Titulo", desc_card = textAlt }) => {
    return <>
        <Card bg="blue" border='blue' id="serviciosHeader">
            {/* <Card.Header as="h5">Featured</Card.Header> */}
            <Card.Body>
                <Container className='iono_header d-flex'>
                    {(ico_card)
                        ? <i className={ico_card}></i>
                        : <span> Icono</span>
                    }
                </Container>
                <Card.Title>{title_card}</Card.Title>
                <Card.Text>
                    {desc_card}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default Card_x_service