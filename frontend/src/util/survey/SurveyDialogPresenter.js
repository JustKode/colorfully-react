/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { BootstrapDialog, BootstrapDialogTitle, EmotionRatiog } from './SurveyDialogStyled';

const emotions = [
  {
    title: 'option1',
    leftText: 'warm',
    rightText: 'cool',
    targetEmotion: 'warm_cool',
  },
  {
    title: 'option2',
    leftText: 'heavy',
    rightText: 'light',
    targetEmotion: 'heavy_light',
  },
  {
    title: 'option3',
    leftText: 'modern',
    rightText: 'classical',
    targetEmotion: 'modern_classical',
  },
  {
    title: 'option4',
    leftText: 'clean',
    rightText: 'dirty',
    targetEmotion: 'clean_dirty',
  },
  {
    title: 'option5',
    leftText: 'activate',
    rightText: 'passive',
    targetEmotion: 'activate_passive',
  },
  {
    title: 'option6',
    leftText: 'hard',
    rightText: 'soft',
    targetEmotion: 'hard_soft',
  },
  {
    title: 'option7',
    leftText: 'tense',
    rightText: 'relaxed',
    targetEmotion: 'tense_relaxed',
  },
  {
    title: 'option8',
    leftText: 'fresh',
    rightText: 'stale',
    targetEmotion: 'fresh_stale',
  },
  {
    title: 'option9',
    leftText: 'masculine',
    rightText: 'feminine',
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
