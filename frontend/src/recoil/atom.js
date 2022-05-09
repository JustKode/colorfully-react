// recoil 페이지
import { atom } from 'recoil';

export const mainBackGroupState = atom({
  key: 'mainBackGroup',
  default: { color: '', backgroundColor: '', font: '' },
});
export const subBackGroupState = atom({
  key: 'subBackGroup',
  default: { color: '', backgroundColor: '', font: '' },
});
export const mainGroupState = atom({
  key: 'mainGroup',
  default: { color: '', backgroundColor: '', font: '' },
});
export const subGroupState = atom({
  key: 'subGroup',
  default: { color: '', backgroundColor: '', font: '' },
});
export const pointGroupState = atom({
  key: 'pointGroup',
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
