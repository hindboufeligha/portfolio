import type { Publication } from '../types/publication'

export const publications: Publication[] = [
  {
    id: 'compute-resource-usage',
    title:
      'Analysing the Temporal Behaviour of CPU Utilisation: Insights from Production Clouds',
    authors: [
      'Hind Boufeligha and Theodoros Theodoropoulos (equal contribution), Francesco Urdih, Uwe Zdun',
    ],
    venue: 'International Journal of Information Management Data Insights',
    status: 'under-review',
    year: 2026,
  },

  {
    id: 'msc-thesis',
    title:
      'Analysing the Temporal Behaviour of Compute Resource Usage: Insights from large-scale systems',
    authors: ['Hind Boufeligha'],
    venue: 'University of Vienna',
    status: 'msc-thesis',
    year: 2026,
    url: 'https://utheses.univie.ac.at/detail/81737/',
  },
]
