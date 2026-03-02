import type { Vilt, ViltKategori } from './viltTypes'
import { klovvilt } from './vilt/klovvilt'
import { rovdjur } from './vilt/rovdjur'
import { faglar } from './vilt/faglar'
import { hardjur } from './vilt/hardjur'

export type { Vilt, ViltKategori }

export const viltKategorier: ViltKategori[] = [
  {
    id: 'klovvilt',
    namn: 'Klövvilt',
    emoji: '🦌',
    beskrivning: 'Älg, rådjur, hjort, vildsvin och övriga hovdjur som jagas i Sverige.',
    djurIds: ['alg', 'radjur', 'kronhjort', 'dovhjort', 'vildsvin', 'mufflon', 'sikahjort'],
  },
  {
    id: 'rovdjur',
    namn: 'Rovdjur',
    emoji: '🐺',
    beskrivning: 'Varg, björn, lodjur, järv och övriga rovdjur med central roll i svensk natur och viltförvaltning.',
    djurIds: ['varg', 'bjorn', 'lodjur', 'jarv', 'rav', 'gravling', 'mardhund', 'mink', 'mard', 'utter'],
  },
  {
    id: 'skogsfaglar',
    namn: 'Skogsfåglar',
    emoji: '🦃',
    beskrivning: 'Tjäder, orre, järpe och ripor – de klassiska skogsfåglarna som ingår i svensk jakttradition.',
    djurIds: ['tjader', 'orre', 'jarpe', 'dalripa', 'fjallripa'],
  },
  {
    id: 'vattenFaglar',
    namn: 'Vattenfåglar',
    emoji: '🦆',
    beskrivning: 'Änder, dykänder och gäss som jagas vid sjöar, våtmarker och kust i Sverige.',
    djurIds: ['grasand', 'kricka', 'vigg', 'knipa', 'ejder', 'gragas', 'kanadagas'],
  },
  {
    id: 'ovrigaFaglar',
    namn: 'Övriga fåglar',
    emoji: '🕊️',
    beskrivning: 'Fasan, rapphöns, ringduva, morkulla, beckasin och kråkfåglar – jaktvilt utanför de klassiska kategorier.',
    djurIds: ['fasan', 'rapphons', 'ringduva', 'morkulla', 'enkelbeckasin', 'kraka', 'skata'],
  },
  {
    id: 'hardjur',
    namn: 'Hardjur',
    emoji: '🐇',
    beskrivning: 'Skogshare, fälthare och vildkanin – hardjuren är klassiska jaktvilt med lång tradition i svensk jakt.',
    djurIds: ['skogshare', 'falthare', 'vildkanin'],
  },
]

export const allaVilt: Vilt[] = [
  ...klovvilt,
  ...rovdjur,
  ...faglar,
  ...hardjur,
]

export function getVilt(id: string): Vilt | undefined {
  return allaVilt.find(v => v.id === id)
}

export function getViltByKategori(kategoriId: string): Vilt[] {
  return allaVilt.filter(v => v.kategoriId === kategoriId)
}

export function getKategori(id: string): ViltKategori | undefined {
  return viltKategorier.find(k => k.id === id)
}
