import React from 'react'
import Card_x_service from '../Banner_nav_comp/Card_x_service'

const ServicesGeneral = () => {
  return (
    <>
      <div className='Container ContainerGeneral-Services'>
        <Card_x_service ico_card={'bi bi-screwdriver'} title_card='IMPLANTES' />
        <Card_x_service ico_card={'bi bi-brush'} title_card='LIMPIEZAS' />
        <Card_x_service ico_card={'bi bi-basket-fill'} title_card='ENCIAS' />
        <Card_x_service ico_card={'bi bi-radioactive'} title_card='URGENCIAS' />
        <Card_x_service ico_card={'bi bi-clipboard2-plus'} title_card='CONSULTA' />
        <Card_x_service ico_card={'bi bi-bandaid'} title_card='PROTESIS' />

      </div>
    </>
  )
}

export { ServicesGeneral }