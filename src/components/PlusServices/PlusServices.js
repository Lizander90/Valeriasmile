import React from 'react'
import { Container } from 'react-bootstrap'

const PlusServices = ({ children }) => {
    return (
        <Container className='container-PlusServices'>
            {children}
        </Container>
    )
}

export { PlusServices }