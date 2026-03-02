export interface ViltSektion {
  rubrik: string
  text: string
}

export interface Vilt {
  id: string
  namn: string
  latinNamn: string
  kategoriId: string
  emoji: string
  kortBeskrivning: string
  metaDescription: string
  fakta: {
    vikt?: string
    längd?: string
    livslängd?: string
    jakttid?: string
    status?: string
  }
  sektioner: ViltSektion[]
}

export interface ViltKategori {
  id: string
  namn: string
  emoji: string
  beskrivning: string
  djurIds: string[]
}
