import { NewsMediaType } from '@/constant'

type NewsCardDataMedia = {
  type: NewsMediaType
  url: string
}

export interface NewsCardData {
  timestamp: number
  userId: string
  name: string
  avatarUrl: string
  content: string
  media: NewsCardDataMedia[]
  likeCount: number
  likeStatus: boolean
  commentCount: number
}
