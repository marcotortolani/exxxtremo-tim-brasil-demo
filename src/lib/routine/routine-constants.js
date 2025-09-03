import dictionary from '@/dictionary/lang.json'

export const ROUTINE_PROFILE = {
  target: [
    {
      name: dictionary['Improve fitness'],
      id: 1,
      tag: 'mejorar-forma-fisica',
      active: false,
    },
    {
      name: dictionary['Improve endurance'],
      id: 2,
      tag: 'mejorar-resistencia',
      active: false,
    },
    {
      name: dictionary['Reduce stress'],
      id: 3,
      tag: 'reducir-stress',
      active: false,
    },
    {
      name: dictionary['Lose weight'],
      id: 4,
      tag: 'perder-peso',
      active: false,
    },
    {
      name: dictionary['Gain muscle'],
      id: 5,
      tag: 'ganar-musculo',
      active: false,
    },
  ],
  levels: [
    {
      name: dictionary['Beginner'],
      id: 1,
      active: true,
    },
    {
      name: dictionary['Intermediate'],
      id: 2,
      active: false,
    },
    {
      name: dictionary['Advanced'],
      id: 3,
      active: false,
    },
  ],
  focusAreas: [
    {
      name: dictionary['Upper body'],
      id: 1,
      category: 'tren-superior',
      active: false,
    },
    {
      name: dictionary['Lower body'],
      id: 2,
      category: 'tren-inferior',
      active: false,
    },
    {
      name: dictionary['Full body'],
      id: 3,
      category: 'entrenamientos',
      active: false,
    },
  ],
  days: [],
  trainer: undefined,
  dataAccepted: false,
}

export const TRAINER_TYPE = {
  male: dictionary['trainer (male)'],
  female: dictionary['trainer (female)'],
}

export const DAYS = [
  dictionary['Sun'],
  dictionary['Mon'],
  dictionary['Tue'],
  dictionary['Wed'],
  dictionary['Thu'],
  dictionary['Fri'],
  dictionary['Sat'],
]

export const USER_ROUTINE = new Array(4).fill(null).map((_, a) => ({
  week: a + 1,
  days: new Array(3).fill(null).map((_, b) => ({
    day: b + 1,
    sections: new Array(4).fill(null).map((_, c) => ({
      id: c + 1,
      exercises: [],
    })),
  })),
}))
