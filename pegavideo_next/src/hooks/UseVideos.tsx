import VideoDownloadService from '../services/VideoDownloadService'

export default function UseBlog (): any {
  const repo: VideoDownloadService = new VideoDownloadService()

  async function getVideoInstagram (url: string) {
    const res = await repo.getVideoInstagram(url)
    return res
  }

  return {
    getVideoInstagram,

  }
}
