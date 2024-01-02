import InstagramDownloadService from '../services/InstagramDownloadService'

export default function UseBlog (): any {
  const repo: InstagramDownloadService = new InstagramDownloadService()

  async function getVideoInstagram (url: string) {
    const res = await repo.getVideoInstagram(url)
    return res
  }

  async function getPicsInstagram (url: string) {
    const res = await repo.getPicsInstagram(url)
    return res
  }

  return {
    getVideoInstagram,
    getPicsInstagram
  }
}
