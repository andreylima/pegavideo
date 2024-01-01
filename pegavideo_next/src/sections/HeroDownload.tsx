import React from 'react'
import DatalayerService from '~/utils/datalayerService'
import { HeroDownloadElement } from '~/styles/sections/HeroDownload-css'
import { Container } from 'react-bootstrap'
import Button from '~/atoms/Button'
import InputText from '~/atoms/InputText'


const {
  sendCustomEvent
} = DatalayerService()

const HeroDownload: React.FC = () => {
  
  return (
          <HeroDownloadElement>
            <Container>
                <div className="left">
                  <h2>Salve vídeos do Instagram e Youtube direto para seu celular</h2>
                  <div className="buttonWrapper">
                    <Button
                    color="#FF40BD"
                    cta="Instagram"
                    />
                    <Button
                    color="#FFAA1B"
                    cta="Youtube"
                    className="inactive"
                    />
                  </div>
                  <div className="inputGroup">
                    <InputText
                    placeholder='Cole a URL do vídeo desejado'/>
                    <Button
                    color="#FF40BD"
                    cta="Buscar"
                    type="submit"
                    />
                  </div>
                </div>
                <div className="right">
                  <img src='/img/rocket.png' className='featured-image'/>
                </div>

            </Container>
          </HeroDownloadElement>
  )
}
export default HeroDownload
