/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useRecoilState } from 'recoil';
import { Checkbox, Typography } from '@mui/material';
import ColorDropbox from '../../atoms/ColorDopbox/ColorDropbox';
import RatingSlider from '../../atoms/RatingSlider/RatingSlider';
import selectEmotionState, { selectEmotionCountState } from '../../recoil/selectState';

const transferKorean = {
  warm: '따뜻함',
  cool: '차가움',
  heavy: '무거움',
  light: '가벼움',
  modern: '모던함',
  classical: '클래식함',
  clean: '깨끗함',
  dirty: '더러움',
  activate: '활동적임',
  passive: '수동적임',
  hard: '딱딱함',
  soft: '부드러움',
  tense: '긴장있음',
  relaxed: '긴장풀림',
  fresh: '신선함',
  stale: '오래됨',
  masculine: '남성적',
  feminine: '여성적',
};

function EmotionBox(Props) {
  const { colors, emotion } = Props;
  const [emotionState, setEmotionState] = useRecoilState(selectEmotionState);
  const [emotionCount, setEmotionCount] = useRecoilState(selectEmotionCountState);

  const onCheckboxClick = () => {
    setEmotionState({
      ...emotionState,
      [emotion]: { ...emotionState[emotion], checked: !emotionState[emotion].checked },
    });

    if (emotionState[emotion].checked) {
      setEmotionCount(emotionCount - 1);
    } else {
      setEmotionCount(emotionCount + 1);
    }
  };

  const onSliderMove = (value) => {
    setEmotionState({
      ...emotionState,
      [emotion]: { ...emotionState[emotion], strength: value },
    });
  };

  return (
    <Box
      sx={{
        minWidth: '15rem',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',

        '&+&': {
          borderTop: '1px dashed black',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Typography>{transferKorean[emotion]}</Typography>
        <ColorDropbox colors={colors} disabled={emotionState[emotion].checked === false} emotion={emotion} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Checkbox
          checked={emotionState[emotion].checked}
          onClick={onCheckboxClick}
          disabled={emotionState[emotion].checked === false && emotionCount === 2}
        />
        <RatingSlider
          disabled={emotionState[emotion].checked === false || emotionCount === 1}
          onRating={onSliderMove}
          strength={emotionState[emotion].strength}
        />
      </Box>
    </Box>
  );
}

export default EmotionBox;
