import axios from 'axios'
import BaseUrlApi from '~/pages/_customGlobals'

const baseUrl = BaseUrlApi()

const api = axios.create({
  baseURL: baseUrl
})

const apiLocal = axios.create({
  baseURL: ''
})

let resposta: any = {}

export default class InstagramDownloadService {
  async getVideoInstagram (url: string): Promise<Object> {
    await api.get(`api/download/Instagram/video?url=${url}`)
      .then((response: any) => {
        resposta = response.data
      }).catch((err) => {
        resposta = err
      })
    return resposta
  }

  async getPicsInstagram (url: string): Promise<Object> {
    await api.get(`api/download/Instagram/pics?url=${url}`)
      .then((response: any) => {
        resposta = response.data
      }).catch((err) => {
        resposta = err
      })
    return resposta
  }
   

}
