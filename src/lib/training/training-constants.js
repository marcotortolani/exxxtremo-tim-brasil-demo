import dictionary from '@/dictionary/lang.json'

export const TRAINING_OPTIONS = [
  {
    value: '',
    label: dictionary['Select the type of trainer'],
  },
]

export const LEVEL_OPTIONS = [
  {
    value: 1,
    name: dictionary['Beginner'],
  },
  {
    value: 2,
    name: dictionary['Intermediate'],
  },
  {
    value: 3,
    name: dictionary['Advanced'],
  },
]

export const EXERCISE_STATES = {
  START: 'start',
  READY: 'ready',
  PAUSE: 'pause',
  RESTART: 'restart',
  FINISH: 'finish',
}

export const EXERCISE_STORE_INITIAL = {
  open: false,
  exercise: undefined,
  section: undefined,
}

export const TRAINING_INITIAL = {
  pecho: undefined,
  'brazos-y-hombros': undefined,
  'gluteos-y-piernas': undefined,
  abdominales: undefined,
}
