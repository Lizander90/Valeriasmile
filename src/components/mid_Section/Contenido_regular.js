import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import recursos from '../../assets/recursos';


const contSec = 'Valeria Smile is a dental practice located just off the N11 in Booterstown with ample parking directly  outside. We specialise in treating toothache (root canal treatment / Endodontics) and the replacement of missing teeth or those with a poor prognosis (dental implants). We also provide general dental services and a full dental hygiene service. The practice is fully digital and accepts PRSI and  private patients. We are open from 8am every  morning during the week. card title and make up the bulk of the cards content.';


const sendWhatsApp = () => {
    window.location.href = "https://wa.me/56996597304";
}

const Contenido_regular = ({ tituloSection = "", contSection = contSec }) => {


    return (
        <>
            {
                <Card id='card_about' className='text-center'>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <Card.Body >
                                <h2 className='about_vs'>{(tituloSection)
                                    ? tituloSection
                                    : <>Bienvenido a <br /> Valeria Smile </>
                                }</h2>
                                <Card.Text>
                                    {contSection}
                                </Card.Text>
                                <Button onClick={() => sendWhatsApp()} variant="light" className='buttonWhatsapp' id="btn_agendar_trans"> AGENDAR AHORA</Button>
                            </Card.Body>
                        </div>
                        <div className='col-lg-6'>
                            <Card.Img variant="top" src={recursos.valeriasmile_desc} />
                        </div>

                    </div>

                </Card>
            }

        </>
    )
}

export default Contenido_regular