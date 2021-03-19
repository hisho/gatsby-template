export type pageDataType = {
  page_id: string
  title: string
  heading?: {
    japanese: string,
    english: string
  },
  description?: string,
  image?: string,
  path: string,
  parent_id?: string,
}
