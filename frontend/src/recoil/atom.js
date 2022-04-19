// recoil 페이지
import { atom } from 'recoil';

export const group1State = atom({
  key: 'group1',
  default: { color: '', backgroundColor: '', font: '' },
});
export const group2State = atom({
  key: 'group2',
  default: { color: '', backgroundColor: '', font: '' },
});
export const group3State = atom({
  key: 'group3',
  default: { color: '', backgroundColor: '', font: '' },
});
export const group4State = atom({
  key: 'group4',
  default: { color: '', backgroundColor: '', font: '' },
});
export const group5State = atom({
  key: 'group5',
  default: { color: '', backgroundColor: '', font: '' },
});

// for survey
export const surveyDialogState = atom({
  key: 'open',
  default: false,
});

// for emotion rating
//  min -50 ~ 50 max
export const surveyRatingState = atom({
  key: 'emotionRating',
  default: {
    warm_cool: 0,
    heavy_light: 0,
    modern_classical: 0,
    clean_dirty: 0,
    activate_passive: 0,
    hard_soft: 0,
    tense_relaxed: 0,
    fresh_stale: 0,
    masculine_feminine: 0,
  },
});
