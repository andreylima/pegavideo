import YoutubeDownloadService from '../services/YoutubeDownloadService'

export default function UseBlog (): any {
  const repo: YoutubeDownloadService = new YoutubeDownloadService()

  async function getVideoYoutube (url: string) {
    const res = await repo.getVideoYoutube(url)
    return res
  }


  return {
    getVideoYoutube
  }
}
