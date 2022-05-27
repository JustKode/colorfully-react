/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { BootstrapDialog, BootstrapDialogTitle, EmotionRatiog } from './SurveyDialogStyled';

const emotions = [
  {
    title: '선택1',
    leftText: '따뜻함',
    rightText: '차가움',
    targetEmotion: 'warm_cool',
  },
  {
    title: '선택2',
    leftText: '무거움',
    rightText: '가벼움',
    targetEmotion: 'heavy_light',
  },
  {
    title: '선택3',
    leftText: '모던함',
    rightText: '클래식함',
    targetEmotion: 'modern_classical',
  },
  {
    title: '선택4',
    leftText: '깨끗함',
    rightText: '더러움',
    targetEmotion: 'clean_dirty',
  },
  {
    title: '선택5',
    leftText: '활동적임',
    rightText: '수동적임',
    targetEmotion: 'activate_passive',
  },
  {
    title: '선택6',
    leftText: '딱딱함',
    rightText: '부드러움',
    targetEmotion: 'hard_soft',
  },
  {
    title: '선택7',
    leftText: '긴장있음',
    rightText: '긴장풀림',
    targetEmotion: 'tense_relaxed',
  },
  {
    title: '선택8',
    leftText: '신선함',
    rightText: '오래됨',
    targetEmotion: 'fresh_stale',
  },
  {
    title: '선택9',
    leftText: '남성적',
    rightText: '여성적',
    targetEmotion: 'masculine_feminine',
  },
];

export default function SurveyDialogPresenter(Props) {
  const { open, handleClose, onRating, handleSubmit } = Props;
  return (
    <BootstrapDialog onClose={handleClose} open={open} maxWidth="sm">
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        설문 조사
      </BootstrapDialogTitle>
      <DialogContent
        dividers
        sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
        // sx={{
        //   '&.MuiDialogContent-root': {
        //     backgroundColor: '#d1d4d6',
        //   },
        // }}
      >
        {emotions.map((item, index) => (
          <EmotionRatiog
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={item.title}
            leftText={item.leftText}
            rightText={item.rightText}
            onRating={onRating}
            targetEmotion={item.targetEmotion}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>제출하기</Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
