import React, { useState, createContext } from 'react'
import DatalayerService from '~/utils/datalayerService'
import { HeaderElement } from '~/styles/organisms/header-css'
import { Container } from 'react-bootstrap'


export type MenuDisplay = {
    turnOnMenu: boolean
    SetTurnOnMenu:(c: boolean) => void
}
export const turnOnMenuContext = createContext<MenuDisplay>({
  turnOnMenu: false,
  SetTurnOnMenu: () => useState('')
})
const {
  sendCustomEvent
} = DatalayerService()

const Header: React.FC = () => {
  
  return (
          <HeaderElement>
            <Container>
              <h1><img src="/img/logo-pega-video.png" title="Pega Video" className='logo'/></h1>
            </Container>
          </HeaderElement>
  )
}
export default Header
