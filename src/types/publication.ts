export type PublicationStatus =
  'under-review' | 'accepted' | 'published' | 'msc-thesis'

export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  status: PublicationStatus
  year: number
  description?: string
  url?: string
}
