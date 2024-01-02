import React from 'react'
import DatalayerService from '~/utils/datalayerService'
import { VideosListElement } from '~/styles/sections/VideosList-css'
import { Container } from 'react-bootstrap'

interface Videos {
    videos: any
  }

const {
  sendCustomEvent
} = DatalayerService()

const VideosList: React.FC<Videos> = (props) => {
  
  return (
          <VideosListElement>
            <Container>
               {props.videos.map((video: string) => {
                return <video src={video}/> 
               })}
            </Container>
          </VideosListElement>
  )
}
export default VideosList
