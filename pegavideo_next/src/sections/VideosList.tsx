import React from 'react'
import DatalayerService from '~/utils/datalayerService'
import { VideosListElement } from '~/styles/sections/VideosList-css'
import { Container } from 'react-bootstrap'

const {
  sendCustomEvent
} = DatalayerService()

const VideosList: React.FC = () => {
  
  return (
          <VideosListElement>
            <Container>
               
            </Container>
          </VideosListElement>
  )
}
export default VideosList
