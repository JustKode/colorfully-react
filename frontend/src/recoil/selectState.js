import { atom } from 'recoil';

const selectEmotionState = atom({
  key: 'selectEmotion',
  default: {
    warm: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    cool: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    heavy: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    light: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    modern: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    classical: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    clean: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    dirty: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    activate: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    passive: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    hard: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    soft: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    tense: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    relaxed: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    fresh: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    stale: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    masculine: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
    feminine: {
      checked: false,
      color: {
        mainBackGroup: '#000000',
        mainGroup: '#111111',
        subGroup: '#222222',
        pointGroup: '#333333',
      },
      strength: 0,
    },
  },
});

export const selectEmotionCountState = atom({
  key: 'selectCount',
  default: 0,
});

export default selectEmotionState;
