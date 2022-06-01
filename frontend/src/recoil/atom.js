// recoil 페이지
import { atom } from 'recoil';

export const CRgroupState = atom({
  key: 'CRgroupState',
  default: {
    mainBackGroup: { color: '', backgroundColor: '', font: '' },
    mainGroup: { color: '', backgroundColor: '', font: '' },
    subGroup: { color: '', backgroundColor: '', font: '' },
    pointGroup: { color: '', backgroundColor: '', font: '' },
    groupId: '',
  },
});

// for survey
export const surveyDialogState = atom({
  key: 'surveyOpen',
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

export const drawerState = atom({
  key: 'drawer',
  default: false,
});

export const wishEmotionState = atom({
  key: 'emotion',
  default: '',
});

export const selectedColorState = atom({
  key: 'selectedColor',
  default: [],
});
